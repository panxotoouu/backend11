const express = require("express");
const {
  createReservation,
  getReservations,
  updateReservation,
  deleteReservation,
} = require("../controllers/reservationController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Rutas de reservas
router.post("/", protect, createReservation);
router.get("/", protect, getReservations);
router.put("/:id", protect, updateReservation);
router.delete("/:id", protect, deleteReservation);

module.exports = router;
