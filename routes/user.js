const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  logoutUser,
} = require("../controllers/usersController");
const { protect } = require("../middleware/authMiddleware");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/name", protect, getUser);
router.get("/logout", logoutUser);

module.exports = router;
