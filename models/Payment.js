const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  condominium: { type: mongoose.Schema.Types.ObjectId, ref: "Condominium", required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  reference: { type: String },
});

module.exports = mongoose.model("Payment", paymentSchema);
