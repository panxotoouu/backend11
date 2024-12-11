const mongoose = require("mongoose");

const condominiumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  adminFee: { type: Number, default: 0 },
  spaces: [{ type: String }],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Condominium", condominiumSchema);
