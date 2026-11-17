
const crypto = require("crypto");
const prisma = require("../config/db");

const handleRazorpayWebhook = async (req, res) => {
  try {
    const signature = req.headers["x-razorpay-signature"];
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!signature || !webhookSecret || !Buffer.isBuffer(req.body)) {
      return res.status(400).json({
        success: false,
        message: "Invalid webhook request.",
      });
    }

    // Verify Razorpay webhook signature using the raw body
    const expectedSignature = crypto
      .createHmac("sha256", webhookSecret)
      .update(req.body)
      .digest("hex");

    const receivedBuffer = Buffer.from(signature, "hex");
    const expectedBuffer = Buffer.from(expectedSignature, "hex");

    if (
      receivedBuffer.length !== expectedBuffer.length ||
      !crypto.timingSafeEqual(receivedBuffer, expectedBuffer)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid webhook signature.",
      });
    }

    const event = JSON.parse(req.body.toString("utf8"));

    // Handle successful refund
    if (event.event === "refund.processed") {
      const refund = event.payload?.refund?.entity;

      if (!refund?.id) {
        return res.status(400).json({
          success: false,
          message: "Refund details missing.",
        });
      }

      const booking = await prisma.booking.findUnique({
        where: {
          razorpayRefundId: refund.id,
        },
      });

      if (booking) {
        await prisma.booking.update({
          where: {
            id: booking.id,
          },
          data: {
            refundStatus: "PROCESSED",
            paymentStatus: "REFUNDED",
            refundProcessedAt: new Date(),
            refundAmountPaise: refund.amount,
          },
        });

        console.log(`Refund processed for booking #${booking.id}`);
      }
    }

    // Handle failed refund
    if (event.event === "refund.failed") {
      const refund = event.payload?.refund?.entity;

      if (!refund?.id) {
        return res.status(400).json({
          success: false,
          message: "Refund details missing.",
        });
      }

      const booking = await prisma.booking.findUnique({
        where: {
          razorpayRefundId: refund.id,
        },
      });

      if (booking) {
        await prisma.booking.update({
          where: {
            id: booking.id,
          },
          data: {
            refundStatus: "FAILED",
            // Keep paymentStatus as PAID.
            // A failed refund does not mean the money was returned.
          },
        });

        console.log(`Refund failed for booking #${booking.id}`);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Webhook received.",
    });

  } catch (error) {
    console.error("Razorpay webhook error:", error);

    return res.status(500).json({
      success: false,
      message: "Webhook processing failed.",
    });
  }
};

module.exports = {
  handleRazorpayWebhook,
};
