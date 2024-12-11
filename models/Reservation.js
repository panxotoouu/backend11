const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  condominium: { type: mongoose.Schema.Types.ObjectId, ref: "Condominium", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  space: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
});

module.exports = mongoose.model("Reservation", reservationSchema);
