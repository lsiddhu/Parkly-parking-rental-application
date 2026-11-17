
const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  try {
    // Check JWT configuration
    if (
      !process.env.JWT_SECRET ||
      process.env.JWT_SECRET.length < 32
    ) {
      console.error("JWT_SECRET is missing or too short.");

      return res.status(500).json({
        success: false,
        message: "Authentication service is not configured.",
      });
    }

    // Get token from HTTP-only cookie
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please log in to access this resource.",
      });
    }

    // Verify JWT
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      {
        algorithms: ["HS256"],
      }
    );

    // Validate token payload
    if (
      !Number.isInteger(decoded.id) ||
      decoded.id <= 0 ||
      !["DRIVER", "PROVIDER", "BOTH"].includes(decoded.role)
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid authentication token.",
      });
    }

    // Attach authenticated user information
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    next();

  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Your session has expired. Please log in again.",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid authentication token.",
      });
    }

    console.error("Authentication middleware error:", error);

    return res.status(500).json({
      success: false,
      message: "Authentication failed.",
    });
  }
};


// ROLE AUTHORIZATION MIDDLEWARE
const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Please log in first.",
      });
    }

    // BOTH users can access DRIVER and PROVIDER features
    const userRoles =
      req.user.role === "BOTH"
        ? ["BOTH", "DRIVER", "PROVIDER"]
        : [req.user.role];

    const hasPermission = allowedRoles.some((role) =>
      userRoles.includes(role)
    );

    if (!hasPermission) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to access this resource.",
      });
    }

    next();
  };
};


module.exports = {
  authenticateUser,
  authorizeRole,
};
