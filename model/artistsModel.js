const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  city: String,
  state: String,
  bio: String,
  priceRange: String,
  skills: [String],
  avatar: String,
  portfolio: [String],
});

module.exports = mongoose.model("Artist", artistSchema);
