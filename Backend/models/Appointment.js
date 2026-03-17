const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  patientName: String,
  age: Number,
  gender: String,
  appointmentDate: Date,
  dentistName: String,
  clinicName: String
});

module.exports = mongoose.model("Appointment", AppointmentSchema);