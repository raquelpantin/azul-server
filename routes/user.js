const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/usersController");
const { protect } = require("../middleware/authMiddleware");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/name", protect, getUser);

module.exports = router;
