const express = require("express");
const {
  register,
  login,
  refresh,
  logout,
  me,
  createStaffUser,
  listRoles,
} = require("../controllers/authController");
const { authenticate } = require("../middleware/auth");
const { authorizeRoles } = require("../middleware/role");

const router = express.Router();

router.get("/roles", listRoles);
router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.get("/me", authenticate, me);
router.post("/logout", authenticate, logout);
router.post(
  "/staff",
  authenticate,
  authorizeRoles("admin"),
  createStaffUser
);

module.exports = router;
