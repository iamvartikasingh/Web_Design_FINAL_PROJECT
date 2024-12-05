const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  doctor: { type: String, required: true },
  location: { type: String, required: true },
  paymentStatus: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Booking", bookingSchema);