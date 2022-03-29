const asyncHandler = require("express-async-handler");

//gets artist info
//access public
//route /artist
const getArtist = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get artist info" });
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
