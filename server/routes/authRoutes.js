const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} = require("../controllers/authController");

const { authenticateUser } = require("../middleware/authMiddleware");

const rateLimit = require("express-rate-limit");

// Login rate limiter
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: {
    success: false,
    message: "Too many login attempts. Please try again after 15 minutes.",
  },
});

// Registration rate limiter
const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many registration attempts. Please try again after an hour.",
  },
});

// Routes
router.post("/register", registerLimiter, registerUser);
router.post("/login", loginLimiter, loginUser);

router.get("/me", authenticateUser, getCurrentUser);
router.post("/logout", logoutUser);

module.exports = router;