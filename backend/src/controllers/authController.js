const { User, ROLES } = require("../models/User");
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require("../utils/tokens");

const PUBLIC_REGISTER_ROLES = ["user", "investor"];

const issueTokens = (user) => {
  const payload = { sub: user._id.toString(), role: user.role };
  return {
    accessToken: signAccessToken(payload),
    refreshToken: signRefreshToken(payload),
  };
};

const register = async (req, res) => {
  try {
    const { name, email, password, role = "user", phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    if (!PUBLIC_REGISTER_ROLES.includes(role)) {
      return res.status(400).json({
        message: `Registration allowed only for: ${PUBLIC_REGISTER_ROLES.join(", ")}`,
      });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const user = await User.create({ name, email, password, role, phone });
    const tokens = issueTokens(user);
    user.refreshToken = tokens.refreshToken;
    await user.save();

    return res.status(201).json({
      user: user.toPublicJSON(),
      ...tokens,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message || "Registration failed" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, expectedRole } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password +refreshToken"
    );

    if (!user || !user.isActive) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const valid = await user.comparePassword(password);
    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (expectedRole && user.role !== expectedRole) {
      return res.status(403).json({
        message: `This account is not authorized for the ${expectedRole} portal`,
      });
    }

    const tokens = issueTokens(user);
    user.refreshToken = tokens.refreshToken;
    await user.save();

    return res.json({
      user: user.toPublicJSON(),
      ...tokens,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message || "Login failed" });
  }
};

const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ message: "Refresh token required" });
    }

    const decoded = verifyRefreshToken(refreshToken);
    const user = await User.findById(decoded.sub).select("+refreshToken");

    if (!user || !user.isActive || user.refreshToken !== refreshToken) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const tokens = issueTokens(user);
    user.refreshToken = tokens.refreshToken;
    await user.save();

    return res.json({
      user: user.toPublicJSON(),
      ...tokens,
    });
  } catch {
    return res.status(401).json({ message: "Invalid or expired refresh token" });
  }
};

const logout = async (req, res) => {
  try {
    if (req.user) {
      req.user.refreshToken = undefined;
      await req.user.save();
    }
    return res.json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message || "Logout failed" });
  }
};

const me = async (req, res) => {
  return res.json({ user: req.user.toPublicJSON() });
};

const createStaffUser = async (req, res) => {
  try {
    const { name, email, password, role, phone } = req.body;
    const staffRoles = ["admin", "agent", "content_manager"];

    if (!staffRoles.includes(role)) {
      return res.status(400).json({
        message: `Admins can only create: ${staffRoles.join(", ")}`,
      });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const user = await User.create({ name, email, password, role, phone });
    return res.status(201).json({ user: user.toPublicJSON() });
  } catch (error) {
    return res.status(500).json({ message: error.message || "User creation failed" });
  }
};

const listRoles = (_req, res) => res.json({ roles: ROLES });

module.exports = {
  register,
  login,
  refresh,
  logout,
  me,
  createStaffUser,
  listRoles,
};
