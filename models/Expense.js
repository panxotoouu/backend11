const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  condominium: { type: mongoose.Schema.Types.ObjectId, ref: "Condominium", required: true },
  month: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  details: [{ description: String, amount: Number }],
  payments: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, amount: Number }],
});

module.exports = mongoose.model("Expense", expenseSchema);
