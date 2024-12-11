const Payment = require("../models/Payment");

// Crear un pago
exports.createPayment = async (req, res) => {
  const { user, condominium, amount, reference } = req.body;
  try {
    const payment = new Payment({ user, condominium, amount, reference });
    await payment.save();
    res.status(201).json({ message: "Pago registrado exitosamente", payment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los pagos
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("user").populate("condominium");
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener pagos de un usuario
exports.getUserPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.params.userId }).populate("condominium");
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
