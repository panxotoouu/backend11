const Expense = require("../models/Expense");

exports.generateReport = async (req, res) => {
  const { condominium, month } = req.body;
  try {
    const expenses = await Expense.find({ condominium, month });
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.totalAmount, 0);
    res.json({ month, totalExpenses, details: expenses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReports = async (req, res) => {
  try {
    const reports = await Expense.find().populate("condominium");
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
