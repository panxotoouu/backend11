const Reservation = require("../models/Reservation");

// Crear una reserva
exports.createReservation = async (req, res) => {
  const { condominium, user, space, date } = req.body;
  try {
    const reservation = new Reservation({ condominium, user, space, date });
    await reservation.save();
    res.status(201).json({ message: "Reserva creada exitosamente", reservation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todas las reservas
exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate("user").populate("condominium");
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una reserva
exports.updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reservation) return res.status(404).json({ message: "Reserva no encontrada" });
    res.json({ message: "Reserva actualizada exitosamente", reservation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una reserva
exports.deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) return res.status(404).json({ message: "Reserva no encontrada" });
    res.json({ message: "Reserva eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
