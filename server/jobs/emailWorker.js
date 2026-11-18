
const prisma = require("../config/db");
const sendEmail = require("../utils/sendEmail");

const POLL_INTERVAL = 5000;
const MAX_ATTEMPTS = 5;
const LOCK_TIMEOUT = 2 * 60 * 1000;

let workerStarted = false;
let isProcessing = false;

const processPendingEmails = async () => {
  if (isProcessing) return;

  isProcessing = true;

  try {
    const now = new Date();
    const staleBefore = new Date(Date.now() - LOCK_TIMEOUT);

    const jobs = await prisma.emailJob.findMany({
      where: {
        OR: [
          {
            status: "PENDING",
            nextRetryAt: { lte: now },
          },
          {
            status: "PROCESSING",
            OR: [
              { lockedAt: null },
              { lockedAt: { lt: staleBefore } },
            ],
          },
        ],
      },
      orderBy: { createdAt: "asc" },
      take: 5,
    });

    for (const job of jobs) {
      const lockTime = new Date();

      // Atomically claim the job to prevent concurrent processing.
      const claimed = await prisma.emailJob.updateMany({
        where: {
          id: job.id,
          OR: [
            {
              status: "PENDING",
              nextRetryAt: { lte: now },
            },
            {
              status: "PROCESSING",
              OR: [
                { lockedAt: null },
                { lockedAt: { lt: staleBefore } },
              ],
            },
          ],
        },
        data: {
          status: "PROCESSING",
          lockedAt: lockTime,
          attempts: { increment: 1 },
        },
      });

      if (claimed.count === 0) continue;

      const attemptNumber = job.attempts + 1;

      console.log(
        `[Email Worker] Processing job #${job.id}, attempt ${attemptNumber}`
      );

      try {
        const success = await sendEmail({
          to: job.recipient,
          subject: job.subject,
          html: job.html,
        });

        if (success) {
          await prisma.emailJob.update({
            where: { id: job.id },
            data: {
              status: "SENT",
              sentAt: new Date(),
              lockedAt: null,
              lastError: null,
            },
          });

          console.log(`[Email Worker] Job #${job.id} sent successfully.`);
        } else {
          throw new Error("Email delivery failed through SMTP.");
        }
      } catch (error) {
        const permanentlyFailed = attemptNumber >= MAX_ATTEMPTS;

        // Exponential retry: 1, 2, 4, 8 minutes.
        const delayMinutes = Math.pow(2, attemptNumber - 1);

        await prisma.emailJob.update({
          where: { id: job.id },
          data: {
            status: permanentlyFailed ? "FAILED" : "PENDING",
            nextRetryAt: new Date(
              Date.now() + delayMinutes * 60 * 1000
            ),
            lockedAt: null,
            lastError: error.message,
          },
        });

        console.error(
          `[Email Worker] Job #${job.id} failed:`,
          error.message
        );
      }
    }
  } catch (error) {
    console.error("[Email Worker] Worker error:", error);
  } finally {
    isProcessing = false;
  }
};

const startEmailWorker = () => {
  if (workerStarted) return;

  workerStarted = true;

  console.log("[Email Worker] Background worker started.");

  // Process existing jobs immediately.
  processPendingEmails();

  // Check for new jobs every five seconds.
  setInterval(processPendingEmails, POLL_INTERVAL);
};

module.exports = startEmailWorker;
