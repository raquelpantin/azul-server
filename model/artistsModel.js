const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true],
  },
});

module.exports = mongoose.model("Artist", artistSchema);
