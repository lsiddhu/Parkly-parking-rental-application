
const express = require("express");
const router = express.Router();

const {
  createBooking,
  getMyBookings,
  getProviderBookings,
  createPaymentOrder,
  verifyPayment,
  cancelBooking,
} = require("../controllers/bookingController");

const { authenticateUser } = require("../middleware/authMiddleware");

// All booking routes require authentication
router.use(authenticateUser);
// Get logged-in user's bookings
router.get("/mine", getMyBookings);
// Get provider's bookings
router.get("/provider", getProviderBookings); 
// Create a booking
router.post("/", createBooking);
// Cancel a booking by ID
router.patch("/:id/cancel", cancelBooking);
// Create a Razorpay payment order for a specific booking
router.post("/:id/payment/order", createPaymentOrder);
//verify payment for a specific booking
router.post("/:id/payment/verify",verifyPayment);
module.exports = router;
