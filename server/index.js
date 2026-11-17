
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const app = express();

const parkingRoutes = require("./routes/parkingRoutes");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const razorpayWebhookRoutes = require("./routes/razorpayWebhookRoutes");

const startBookingCleanup = require("./jobs/bookingCleanup");

// Middleware
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(helmet());

app.use(express.json({
  limit: "10kb",
}));

// Razorpay webhook must receive the raw request body.
// Keep this BEFORE express.json().
app.use(
  "/api/webhooks/razorpay",
  express.raw({ type: "application/json" }),
  razorpayWebhookRoutes
);

// Normal middleware
app.use(express.json());
app.use(cookieParser());

// API routes
app.get("/", (req, res) => {
  res.send("Welcome to Parkly API!");
});

app.use("/api/auth", authRoutes);
app.use("/api/parking-spaces", parkingRoutes);
app.use("/api/bookings", bookingRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Parkly backend is running!",
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Parkly server running on port ${PORT}`);
  startBookingCleanup();
});
