const express = require("express");
const {
  createPayment,
  getPayments,
  getUserPayments,
} = require("../controllers/paymentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Rutas de pagos
router.post("/", protect, createPayment);
router.get("/", protect, getPayments);
router.get("/user/:userId", protect, getUserPayments);

module.exports = router;
