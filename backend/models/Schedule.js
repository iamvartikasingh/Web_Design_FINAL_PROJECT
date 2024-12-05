const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  doctor: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  booked: { type: Boolean, default: false }, // Track if the slot is booked
});

module.exports = mongoose.model("Schedule", scheduleSchema);