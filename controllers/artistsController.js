const asyncHandler = require("express-async-handler");
const Artist = require("../model/artistsModel");

//gets artist info
//access public
//route /artist
const getArtist = asyncHandler(async (req, res) => {
  const artists = await Artist.find({ user: req.user.id });
  res.status(200).json(artists);
});

//gets artist info by id (clicking to view profile)
//access private (can only view if logged in)
//route /artist/:id
const getArtistByID = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `view artist profile ${req.params.id}` });
});

module.exports = {
  getArtist,
  getArtistByID,
};
