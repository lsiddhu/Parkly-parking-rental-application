
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

// CORS configuration
const normalizeOrigin = (url) => url?.trim().replace(/\/+$/, "");

const allowedOrigins = [
  "https://parkly-parking-rental-application.vercel.app",
  process.env.CLIENT_URL,
  "http://localhost:5173",
]
  .filter(Boolean)
  .map(normalizeOrigin);

app.use(cors({
  origin: (origin, callback) => {
    const normalizedOrigin = normalizeOrigin(origin);

    if (!origin || allowedOrigins.includes(normalizedOrigin)) {
      return callback(null, true);
    }

    console.error("CORS rejected origin:", origin);
    console.error("Allowed origins:", allowedOrigins);

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));


app.use(helmet());

// Razorpay webhook must receive raw request body.
// Keep this BEFORE express.json().
app.use(
  "/api/webhooks/razorpay",
  express.raw({ type: "application/json" }),
  razorpayWebhookRoutes
);

// Normal middleware
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
// CSRF protection: validate origins for state-changing requests
app.use((req, res, next) => {
  const unsafeMethods = ["POST", "PUT", "PATCH", "DELETE"];

  if (!unsafeMethods.includes(req.method)) {
    return next();
  }

  const origin = req.get("Origin");

if (!origin || !allowedOrigins.includes(normalizeOrigin(origin))) {
    return res.status(403).json({
      success: false,
      message: "Request origin not allowed.",
    });
  }

  next();
});

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
