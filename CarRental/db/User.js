const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  Cars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }],
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
