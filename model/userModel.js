const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User",
  // },
  firstName: {
    type: String,
    required: [true, "Please add your First Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add your Last Name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
});

module.exports = mongoose.model("User", userSchema);