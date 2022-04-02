const express = require("express");
const router = express.Router();
const { getArtists } = require("../controllers/artistsController");
const { protect } = require("../middleware/authMiddleware");

// router.get("/", protect, getArtist);

// router.get("/:id", protect, getArtistByID);

//test, add protect once working so only logged in users can get data
router.get("/", getArtists);

module.exports = router;
