const express = require("express");
const router = express.Router();
const {
  getArtists,
  getArtistByID,
} = require("../controllers/artistsController");

router.get("/:id", getArtistByID);

router.get("/", getArtists);

module.exports = router;
