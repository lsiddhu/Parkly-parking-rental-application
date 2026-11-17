
const prisma = require("../config/db");

const crypto = require("crypto");
const Razorpay = require("razorpay");
const sendEmail = require("../utils/sendEmail");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// CREATE BOOKING
const createBooking = async (req, res) => {
  try {
    const { parkingSpaceId, startAt, durationHours } = req.body;

    // Validate input
    if (!parkingSpaceId || !startAt || !durationHours) {
      return res.status(400).json({
        success: false,
        message: "Parking space, start time and duration are required.",
      });
    }

    if (
      !Number.isInteger(Number(parkingSpaceId)) ||
      !Number.isInteger(durationHours) ||
      durationHours < 1 ||
      durationHours > 24
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid parking space or booking duration.",
      });
    }

    // Only drivers and BOTH-role users can book
    if (req.user.role !== "DRIVER" && req.user.role !== "BOTH") {
      return res.status(403).json({
        success: false,
        message: "Only drivers can book parking spaces.",
      });
    }

    const bookingStart = new Date(startAt);

    if (Number.isNaN(bookingStart.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking date or time.",
      });
    }

    const now = new Date();

    if (bookingStart <= now) {
      return res.status(400).json({
        success: false,
        message: "Booking time must be in the future.",
      });
    }

    const bookingEnd = new Date(
      bookingStart.getTime() + durationHours * 60 * 60 * 1000
    );

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    const booking = await prisma.$transaction(
      async (tx) => {
        // Get parking space
        const parkingSpace = await tx.parkingSpace.findUnique({
          where: {
            id: Number(parkingSpaceId),
          },
        });

        if (!parkingSpace || !parkingSpace.available) {
          throw new Error("PARKING_NOT_AVAILABLE");
        }

        // Prevent owners from booking their own spaces
        if (parkingSpace.ownerId === req.user.id) {
          throw new Error("CANNOT_BOOK_OWN_SPACE");
        }

        // Release expired pending bookings
        await tx.booking.updateMany({
          where: {
            parkingSpaceId: Number(parkingSpaceId),
            status: "PENDING",
            expiresAt: {
              lte: now,
            },
          },
          data: {
            status: "CANCELLED",
          },
        });

        // Check for overlapping bookings
        const existingBooking = await tx.booking.findFirst({
          where: {
            parkingSpaceId: Number(parkingSpaceId),
            status: {
              in: ["PENDING", "CONFIRMED"],
            },
            startAt: {
              lt: bookingEnd,
            },
            endAt: {
              gt: bookingStart,
            },
            OR: [
              {
                status: "CONFIRMED",
              },
              {
                status: "PENDING",
                expiresAt: {
                  gt: now,
                },
              },
            ],
          },
        });

        if (existingBooking) {
          throw new Error("TIME_SLOT_UNAVAILABLE");
        }

        // Calculate amount on the backend
        const amountPaise =
          Math.round(parkingSpace.pricePerHour * 100) * durationHours;

        const totalPrice = amountPaise / 100;

        // Create pending booking
        return await tx.booking.create({
          data: {
            userId: req.user.id,
            parkingSpaceId: Number(parkingSpaceId),

            bookingDate: bookingStart,
            startTime: bookingStart.toISOString().slice(11, 16),
            durationHours,

            startAt: bookingStart,
            endAt: bookingEnd,

            totalPrice,
            amountPaise,

            status: "PENDING",
            paymentStatus: "PENDING",
            expiresAt,
          },
          include: {
            parkingSpace: true,
          },
        });
      },
      {
        isolationLevel: "Serializable",
      }
    );

    return res.status(201).json({
      success: true,
      message: "Booking created. Complete payment within 10 minutes.",
      booking,
    });
  } catch (error) {
    console.error("Create booking error:", error);

    if (error.message === "PARKING_NOT_AVAILABLE") {
      return res.status(404).json({
        success: false,
        message: "Parking space not found or unavailable.",
      });
    }

    if (error.message === "CANNOT_BOOK_OWN_SPACE") {
      return res.status(403).json({
        success: false,
        message: "You cannot book your own parking space.",
      });
    }

    if (error.message === "TIME_SLOT_UNAVAILABLE") {
      return res.status(409).json({
        success: false,
        message: "This parking slot is already booked.",
      });
    }

    if (error.code === "P2034") {
      return res.status(409).json({
        success: false,
        message: "Booking conflict. Please try again.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to create booking.",
    });
  }
};


// VERIFY RAZORPAY PAYMENT SECURELY
const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const bookingId = Number(req.params.id);

    // Validate input
    if (
      !Number.isInteger(bookingId) ||
      bookingId <= 0 ||
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment verification details are required.",
      });
    }

    // Find booking belonging to logged-in user
    const booking = await prisma.booking.findFirst({
      where: {
        id: bookingId,
        userId: req.user.id,
      },
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    // Handle repeated verification of an already successful payment
    if (
      booking.paymentStatus === "PAID" &&
      booking.status === "CONFIRMED" &&
      booking.razorpayPaymentId === razorpay_payment_id
    ) {
      return res.status(200).json({
        success: true,
        message: "Payment already verified. Booking confirmed!",
      });
    }

    // Check booking status and server-stored order ID
    if (
      booking.status !== "PENDING" ||
      booking.paymentStatus !== "PENDING" ||
      booking.razorpayOrderId !== razorpay_order_id
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired booking.",
      });
    }

    if (booking.expiresAt && booking.expiresAt <= new Date()) {
      return res.status(400).json({
        success: false,
        message: "Booking has expired.",
      });
    }

    // Generate signature using the order ID stored in our database
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${booking.razorpayOrderId}|${razorpay_payment_id}`)
      .digest("hex");

    // Safely compare signatures
    const signatureBuffer = Buffer.from(razorpay_signature, "hex");
    const expectedBuffer = Buffer.from(expectedSignature, "hex");

    if (
      signatureBuffer.length !== expectedBuffer.length ||
      !crypto.timingSafeEqual(signatureBuffer, expectedBuffer)
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment signature verification failed.",
      });
    }

    // Fetch payment directly from Razorpay
    const payment = await razorpay.payments.fetch(
      razorpay_payment_id
    );

    // Verify payment belongs to our Razorpay order
    if (payment.order_id !== booking.razorpayOrderId) {
      return res.status(400).json({
        success: false,
        message: "Payment does not belong to this booking.",
      });
    }

    // Verify actual payment amount
    if (payment.amount !== booking.amountPaise) {
      return res.status(400).json({
        success: false,
        message: "Payment amount does not match booking amount.",
      });
    }

    // Verify currency
    if (payment.currency !== "INR") {
      return res.status(400).json({
        success: false,
        message: "Invalid payment currency.",
      });
    }

    // Only captured payments can confirm a booking
    if (payment.status !== "captured" || payment.captured !== true) {
      return res.status(400).json({
        success: false,
        message: "Payment has not been captured yet.",
      });
    }

    // Atomically update booking to prevent duplicate processing
    const updated = await prisma.booking.updateMany({
      where: {
        id: booking.id,
        userId: req.user.id,
        status: "PENDING",
        paymentStatus: "PENDING",
        razorpayOrderId: booking.razorpayOrderId,
      },
      data: {
        paymentStatus: "PAID",
        status: "CONFIRMED",
        razorpayPaymentId: razorpay_payment_id,
      },
    });

    // Another request may have verified the payment simultaneously
    if (updated.count === 0) {
      const latestBooking = await prisma.booking.findUnique({
        where: {
          id: booking.id,
        },
      });

      if (
        latestBooking &&
        latestBooking.paymentStatus === "PAID" &&
        latestBooking.status === "CONFIRMED" &&
        latestBooking.razorpayPaymentId === razorpay_payment_id
      ) {
        return res.status(200).json({
          success: true,
          message: "Payment already verified. Booking confirmed!",
        });
      }

      return res.status(409).json({
        success: false,
        message: "Booking status changed. Please check your bookings.",
      });
    }
    // Get booking details for confirmation email
    const confirmedBooking = await prisma.booking.findUnique({
      where: {
        id: booking.id,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        parkingSpace: true,
      },
    });

    if (confirmedBooking?.user?.email) {
      const bookingDateTime = new Date(
        confirmedBooking.startAt
      ).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "long",
        timeStyle: "short",
      });

      await sendEmail({
        to: confirmedBooking.user.email,
        subject: "Parkly Booking Confirmed - Payment Successful",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333;">
            <h2 style="color: #2563eb;">Booking Confirmed!</h2>

            <p>Hi ${confirmedBooking.user.name},</p>

            <p>Your payment was successful and your parking booking is confirmed.</p>

            <h3>Booking Details</h3>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">Booking ID</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">#${confirmedBooking.id}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">Parking Space</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${confirmedBooking.parkingSpace.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">Address</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${confirmedBooking.parkingSpace.address}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">Date & Time</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${bookingDateTime}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">Duration</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${confirmedBooking.durationHours} hours</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">Amount Paid</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">₹${confirmedBooking.totalPrice}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">Payment ID</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${razorpay_payment_id}</td>
              </tr>
              <tr>
                <td style="padding: 10px;">Payment Status</td>
                <td style="padding: 10px; color: green;">PAID</td>
              </tr>
            </table>

            <p>Thank you for choosing Parkly!</p>
            <p style="color: #777;">Parkly Team</p>
          </div>
        `,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Payment verified. Booking confirmed!",
    });

  } catch (error) {
    console.error("Payment verification error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to verify payment. Please contact support if money was deducted.",
    });
  }
};


// GET LOGGED-IN USER BOOKINGS
const getMyBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        parkingSpace: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error("Get bookings error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve bookings.",
    });
  }
};

// CANCEL BOOKING (DRIVER)
const cancelBooking = async (req, res) => {
  try {
    const bookingId = Number(req.params.id);

    if (!Number.isInteger(bookingId) || bookingId <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking ID.",
      });
    }

    // Find booking belonging to logged-in driver
    const booking = await prisma.booking.findFirst({
      where: {
        id: bookingId,
        userId: req.user.id,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        parkingSpace: true,
      },
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    if (
      booking.status !== "PENDING" &&
      booking.status !== "CONFIRMED"
    ) {
      return res.status(400).json({
        success: false,
        message: "This booking cannot be cancelled.",
      });
    }

    const isPaid = booking.paymentStatus === "PAID";

    // A paid booking must have payment details to refund
    if (
      isPaid &&
      (!booking.razorpayPaymentId ||
        !booking.amountPaise ||
        booking.amountPaise <= 0)
    ) {
      return res.status(409).json({
        success: false,
        message: "Payment details are missing. Please contact support.",
      });
    }

    // Atomically cancel the booking.
    // For paid bookings, reserve the refund process as PENDING.
    const cancelled = await prisma.booking.updateMany({
      where: {
        id: booking.id,
        userId: req.user.id,
        status: booking.status,
        paymentStatus: booking.paymentStatus,
      },
      data: {
        status: "CANCELLED",
        ...(isPaid && {
          refundStatus: "PENDING",
          refundAmountPaise: booking.amountPaise,
        }),
      },
    });

    if (cancelled.count === 0) {
      return res.status(409).json({
        success: false,
        message: "Booking status changed. Please refresh and try again.",
      });
    }

    let refundMessage = "No refund was required.";
    let finalRefundStatus = null;

    // Automatically initiate full refund for paid bookings
    if (isPaid) {
      try {
        const refund = await razorpay.payments.refund(
          booking.razorpayPaymentId,
          {
            amount: booking.amountPaise,
            speed: "normal",
            receipt: `parkly_booking_${booking.id}`,
            notes: {
              bookingId: String(booking.id),
              reason: "Booking cancelled by driver",
            },
          }
        );

        const refundStatus =
          refund.status === "processed"
            ? "PROCESSED"
            : refund.status === "failed"
              ? "FAILED"
              : "PENDING";

        await prisma.booking.update({
          where: {
            id: booking.id,
          },
          data: {
            razorpayRefundId: refund.id,
            refundStatus,
            refundAmountPaise: refund.amount,
            ...(refundStatus === "PROCESSED" && {
              paymentStatus: "REFUNDED",
              refundProcessedAt: new Date(),
            }),
          },
        });

        finalRefundStatus = refundStatus;

        if (refundStatus === "PROCESSED") {
          refundMessage = "Your full refund has been processed.";
        } else if (refundStatus === "PENDING") {
          refundMessage = "Your full refund request has been submitted and is being processed.";
        } else {
          refundMessage = "Your booking is cancelled, but the refund failed. Please contact support.";
        }
      } catch (refundError) {
        console.error("Razorpay refund error:", refundError);

        await prisma.booking.update({
          where: {
            id: booking.id,
          },
          data: {
            refundStatus: "FAILED",
          },
        });

        finalRefundStatus = "FAILED";
        refundMessage =
          "Your booking is cancelled, but the refund could not be initiated. Please contact support.";
      }
    }

    // Send cancellation email
    if (booking.user?.email) {
      const bookingDateTime = booking.startAt
        ? new Date(booking.startAt).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            dateStyle: "long",
            timeStyle: "short",
          })
        : "Not available";

      const refundEmailMessage = isPaid
        ? finalRefundStatus === "PROCESSED"
          ? `<p>Your full refund of ₹${(booking.amountPaise / 100).toFixed(2)} has been processed successfully.</p>`
          : finalRefundStatus === "PENDING"
            ? `<p>Your full refund of ₹${(booking.amountPaise / 100).toFixed(2)} has been initiated and is being processed. Normal refunds generally take 5–7 working days.</p>`
            : `<p>We could not initiate your refund automatically. Please contact Parkly support with booking ID #${booking.id}.</p>`
        : "<p>No payment was made, so no refund is required.</p>";

      await sendEmail({
        to: booking.user.email,
        subject: "Parkly Booking Cancelled",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333;">
            <h2>Booking Cancelled</h2>

            <p>Hi ${booking.user.name},</p>

            <p>Your Parkly parking booking has been cancelled successfully.</p>

            <h3>Booking Details</h3>

            <p><strong>Booking ID:</strong> #${booking.id}</p>
            <p><strong>Parking Space:</strong> ${booking.parkingSpace.name}</p>
            <p><strong>Address:</strong> ${booking.parkingSpace.address}</p>
            <p><strong>Date & Time:</strong> ${bookingDateTime}</p>
            <p><strong>Duration:</strong> ${booking.durationHours} hours</p>
            <p><strong>Amount:</strong> ₹${booking.totalPrice}</p>
            <p><strong>Payment Status:</strong> ${finalRefundStatus === "PROCESSED" ? "REFUNDED" : booking.paymentStatus}</p>
            <p><strong>Refund Status:</strong> ${finalRefundStatus || "NOT REQUIRED"}</p>

            ${refundEmailMessage}

            <p>Thank you for using Parkly.</p>
            <p>Parkly Team</p>
          </div>
        `,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Booking cancelled successfully. ${refundMessage}`,
      refundStatus: finalRefundStatus,
    });

  } catch (error) {
    console.error("Cancel booking error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to cancel booking.",
    });
  }
};


// GET BOOKINGS FOR THE LOGGED-IN PROVIDER
const getProviderBookings = async (req, res) => {
  try {
    // Allow PROVIDER and BOTH roles
    if (req.user.role !== "PROVIDER" && req.user.role !== "BOTH") {
      return res.status(403).json({
        success: false,
        message: "Only providers can view received bookings.",
      });
    }

    const bookings = await prisma.booking.findMany({
      where: {
        parkingSpace: {
          ownerId: req.user.id,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        parkingSpace: {
          select: {
            id: true,
            name: true,
            address: true,
            area: true,
            pricePerHour: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error("Provider bookings error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve provider bookings.",
    });
  }
};

// CREATE RAZORPAY PAYMENT ORDER
const createPaymentOrder = async (req, res) => {
  try {
    const bookingId = Number(req.params.id);

    if (!Number.isInteger(bookingId) || bookingId <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking ID.",
      });
    }

    const booking = await prisma.booking.findFirst({
      where: {
        id: bookingId,
        userId: req.user.id,
      },
      include: {
        parkingSpace: true,
      },
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    if (
      booking.status !== "PENDING" ||
      booking.paymentStatus !== "PENDING"
    ) {
      return res.status(400).json({
        success: false,
        message: "This booking is not eligible for payment.",
      });
    }

    if (booking.expiresAt && booking.expiresAt <= new Date()) {
      await prisma.booking.update({
        where: { id: booking.id },
        data: { status: "CANCELLED" },
      });

      return res.status(400).json({
        success: false,
        message: "Booking expired. Please create a new booking.",
      });
    }

    if (!booking.amountPaise || booking.amountPaise <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking amount.",
      });
    }

    // Reuse an existing Razorpay order if one was already created
    if (booking.razorpayOrderId) {
      return res.status(200).json({
        success: true,
        message: "Payment order already exists.",
        keyId: process.env.RAZORPAY_KEY_ID,
        orderId: booking.razorpayOrderId,
        amount: booking.amountPaise,
        currency: "INR",
        bookingId: booking.id,
      });
    }

    const order = await razorpay.orders.create({
      amount: booking.amountPaise,
      currency: "INR",
      receipt: `booking_${booking.id}`,
      notes: {
        bookingId: String(booking.id),
        userId: String(req.user.id),
      },
    });

    await prisma.booking.update({
      where: { id: booking.id },
      data: {
        razorpayOrderId: order.id,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Payment order created successfully.",
      keyId: process.env.RAZORPAY_KEY_ID,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      bookingId: booking.id,
    });
  } catch (error) {
    console.error("Create payment order error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to create payment order.",
    });
  }
};




module.exports = {
  createBooking,
  getMyBookings,
  getProviderBookings,
  createPaymentOrder,
  verifyPayment,
  cancelBooking,
};
