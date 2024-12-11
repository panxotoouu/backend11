const express = require("express");
const {
  createCondominium,
  updateCondominium,
  getCondominiums,
  getCondominium,
  deleteCondominium,
} = require("../controllers/condominiumController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Rutas de condominios
router.post("/", protect, authorize("admin", "superadmin"), createCondominium);
router.get("/", protect, getCondominiums);
router.get("/:id", protect, getCondominium);
router.put("/:id", protect, authorize("admin", "superadmin"), updateCondominium);
router.delete("/:id", protect, authorize("admin", "superadmin"), deleteCondominium);

module.exports = router;
