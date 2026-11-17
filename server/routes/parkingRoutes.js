
const express = require("express");
const router = express.Router();

const {
  getParkingSpaces,
  getMyParkingSpaces,
  createParkingSpace,
  updateParkingSpace,
  deleteParkingSpace,
} = require("../controllers/parkingController");

const {
  authenticateUser,
} = require("../middleware/authMiddleware");

const authorizeRole = require("../middleware/authorizeRole");

// Public route: drivers can browse available parking spaces
router.get("/", getParkingSpaces);

// Protected route: providers can view their own listings
router.get(
  "/mine",
  authenticateUser,
  authorizeRole("PROVIDER"),
  getMyParkingSpaces
);

// Protected route: providers can publish parking spaces
router.post(
  "/",
  authenticateUser,
  authorizeRole("PROVIDER"),
  createParkingSpace
);

// Protected route: providers can edit their own spaces
router.patch(
  "/:id",
  authenticateUser,
  authorizeRole("PROVIDER"),
  updateParkingSpace
);
// Protected route: providers can delete their own spaces
router.delete(
  "/:id",
  authenticateUser,
  authorizeRole("PROVIDER"),
  deleteParkingSpace
);

module.exports = router;
