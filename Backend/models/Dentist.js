const mongoose = require("mongoose");

const DentistSchema = new mongoose.Schema({
  name: String,
  qualification: String,
  experience: Number,
  clinicName: String,
  address: String,
  location: String,
  photo: String
});

module.exports = mongoose.model("Dentist", DentistSchema);