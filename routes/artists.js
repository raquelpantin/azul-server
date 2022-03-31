const express = require("express");
const router = express.Router();
const {
  getArtist,
  getArtistByID,
} = require("../controllers/artistsController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getArtist);

router.get("/:id", protect, getArtistByID);

module.exports = router;
