
const prisma = require("../config/db");

// GET all available parking spaces (public)
const getParkingSpaces = async (req, res) => {
  try {
    const { area, covered, evCharging, access24x7 } = req.query;

    const filters = { available: true };

    if (area) {
      filters.area = {
        contains: area,
        mode: "insensitive",
      };
    }

    if (covered === "true") filters.covered = true;
    if (evCharging === "true") filters.evCharging = true;
    if (access24x7 === "true") filters.access24x7 = true;

    const spaces = await prisma.parkingSpace.findMany({
      where: filters,
      orderBy: { createdAt: "desc" },
      include: {
        owner: {
          select: { id: true, name: true },
        },
      },
    });

    return res.status(200).json({
      success: true,
      count: spaces.length,
      data: spaces,
    });
  } catch (error) {
    console.error("Parking fetch error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch parking spaces",
    });
  }
};

// GET parking spaces belonging to the logged-in provider
const getMyParkingSpaces = async (req, res) => {
  try {
    const spaces = await prisma.parkingSpace.findMany({
      where: {
        ownerId: req.user.id,
      },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      success: true,
      count: spaces.length,
      data: spaces,
    });
  } catch (error) {
    console.error("Provider parking fetch error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch your parking spaces",
    });
  }
};

// CREATE a parking space
const createParkingSpace = async (req, res) => {
  try {
    const {
      name,
      address,
      area,
      pricePerHour,
      contactPhone,
      covered,
      evCharging,
      access24x7,
      latitude,
      longitude,
    } = req.body;

    if (
      !name?.trim() ||
      !address?.trim() ||
      !area?.trim() ||
      pricePerHour === undefined ||
      pricePerHour === null
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const price = Number(pricePerHour);

    if (!Number.isFinite(price) || price <= 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid hourly price",
      });
    }

    // Coordinates must be supplied together and be valid.
    const hasLatitude = latitude !== undefined && latitude !== null;
    const hasLongitude = longitude !== undefined && longitude !== null;

    if (hasLatitude !== hasLongitude) {
      return res.status(400).json({
        success: false,
        message: "Please provide both latitude and longitude",
      });
    }

    if (hasLatitude) {
      const lat = Number(latitude);
      const lng = Number(longitude);

      if (
        !Number.isFinite(lat) ||
        !Number.isFinite(lng) ||
        lat < -90 ||
        lat > 90 ||
        lng < -180 ||
        lng > 180
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid parking location coordinates",
        });
      }
    }

    const parkingSpace = await prisma.parkingSpace.create({
      data: {
        name: name.trim(),
        address: address.trim(),
        area: area.trim(),
        pricePerHour: price,
        contactPhone: contactPhone?.trim() || null,
        covered: covered === true,
        evCharging: evCharging === true,
        access24x7: access24x7 === true,

        // Owner ID comes from the verified JWT, not the request body.
        owner: {
          connect: { id: req.user.id },
        },

        latitude: hasLatitude ? Number(latitude) : null,
        longitude: hasLongitude ? Number(longitude) : null,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Parking space created successfully",
      data: parkingSpace,
    });
  } catch (error) {
    console.error("Parking creation error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create parking space",
    });
  }
};

// UPDATE a parking space (owner only)
const updateParkingSpace = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid parking space ID",
      });
    }

    const {
      name,
      address,
      area,
      pricePerHour,
      contactPhone,
      covered,
      evCharging,
      access24x7,
      latitude,
      longitude,
    } = req.body;

    // Validate required fields
    if (
      !name?.trim() ||
      !address?.trim() ||
      !area?.trim() ||
      pricePerHour === undefined ||
      pricePerHour === null
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const price = Number(pricePerHour);

    if (!Number.isFinite(price) || price <= 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid hourly price",
      });
    }

    // Validate coordinates
    if (
      latitude === undefined ||
      latitude === null ||
      longitude === undefined ||
      longitude === null
    ) {
      return res.status(400).json({
        success: false,
        message: "Please select the parking location on the map",
      });
    }

    const lat = Number(latitude);
    const lng = Number(longitude);

    if (
      !Number.isFinite(lat) ||
      !Number.isFinite(lng) ||
      lat < -90 ||
      lat > 90 ||
      lng < -180 ||
      lng > 180
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid parking location coordinates",
      });
    }

    // Find existing listing
    const existingSpace = await prisma.parkingSpace.findUnique({
      where: { id },
    });

    if (!existingSpace) {
      return res.status(404).json({
        success: false,
        message: "Parking space not found",
      });
    }

    // Only the owner can edit this listing
    if (existingSpace.ownerId !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You can only edit your own parking spaces",
      });
    }

    const updatedSpace = await prisma.parkingSpace.update({
      where: { id },
      data: {
        name: name.trim(),
        address: address.trim(),
        area: area.trim(),
        pricePerHour: price,
        contactPhone: contactPhone?.trim() || null,
        covered: covered === true,
        evCharging: evCharging === true,
        access24x7: access24x7 === true,
        latitude: lat,
        longitude: lng,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Parking space updated successfully",
      data: updatedSpace,
    });
  } catch (error) {
    console.error("Parking update error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update parking space",
    });
  }
};

// DELETE a parking space (soft delete, owner only)
const deleteParkingSpace = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid parking space ID",
      });
    }

    const existingSpace = await prisma.parkingSpace.findUnique({
      where: { id },
    });

    if (!existingSpace || !existingSpace.available) {
      return res.status(404).json({
        success: false,
        message: "Parking space not found or already deleted",
      });
    }

    // Prevent one provider from deleting another provider's listing.
    if (existingSpace.ownerId !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You can only delete your own parking spaces",
      });
    }

    const deletedSpace = await prisma.parkingSpace.update({
      where: { id },
      data: { available: false },
    });

    return res.status(200).json({
      success: true,
      message: "Parking space deleted successfully",
      data: deletedSpace,
    });
  } catch (error) {
    console.error("Parking deletion error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete parking space",
    });
  }
};

module.exports = {
  getParkingSpaces,
  getMyParkingSpaces,
  createParkingSpace,
  updateParkingSpace,
  deleteParkingSpace,
};
