const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  date: String,
  preference: String,
});

const Car = mongoose.model("Car", CarSchema);
module.exports = {
  Car,
};
