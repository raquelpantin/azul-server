const Artist = require("../model/artistsModel");

const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    console.log(artists);

    res.status(200).json(artists);
  } catch (error) {
    res.status(404).json("Not Found");
  }
};

const getArtistByID = async (req, res) => {
  try {
    const artistsByID = await Artist.find({ _id: req.params.id });
    console.log(artistsByID);
    res.status(200).json(artistsByID);
  } catch (error) {
    res.status(404).json("Nope");
  }
};

module.exports = {
  getArtists,
  getArtistByID,
};
