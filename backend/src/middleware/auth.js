const { User } = require("../models/User");
const { verifyAccessToken } = require("../utils/tokens");

const authenticate = async (req, res, next) => {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;

    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const decoded = verifyAccessToken(token);
    const user = await User.findById(decoded.sub).select("+password");

    if (!user || !user.isActive) {
      return res.status(401).json({ message: "Invalid or inactive account" });
    }

    req.user = user;
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { authenticate };
