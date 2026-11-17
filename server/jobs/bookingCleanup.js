
const cron = require("node-cron");
const prisma = require("../config/db");

const startBookingCleanup = () => {
  cron.schedule("* * * * *", async () => {
    try {
      const now = new Date();

      // 1. Complete confirmed bookings after their end time
      const completedBookings = await prisma.booking.updateMany({
        where: {
          status: "CONFIRMED",
          endAt: {
            lte: now,
          },
        },
        data: {
          status: "COMPLETED",
        },
      });

      // 2. Cancel pending bookings after their expiry time
      const expiredBookings = await prisma.booking.updateMany({
        where: {
          status: "PENDING",
          paymentStatus: "PENDING",
          expiresAt: {
            lte: now,
          },
        },
        data: {
          status: "CANCELLED",
        },
      });

      if (completedBookings.count > 0) {
        console.log(
          `${completedBookings.count} booking(s) marked as COMPLETED`
        );
      }

      if (expiredBookings.count > 0) {
        console.log(
          `${expiredBookings.count} expired booking(s) marked as CANCELLED`
        );
      }
    } catch (error) {
      console.error("Booking cleanup failed:", error);
    }
  });

  console.log("Booking cleanup scheduler started.");
};

module.exports = startBookingCleanup;
