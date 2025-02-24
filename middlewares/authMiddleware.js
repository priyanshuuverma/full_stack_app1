import JWT from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

export const requiresignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode; // Fix: Attach decoded user to req.user
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Unauthorized access. Token is invalid or expired.",
    });
  }
};

// Admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id);
    if (user.role !== 1) {
      // Fix: Corrected condition
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access Denied!",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error checking admin access",
      error: error.message,
    });
  }
};
