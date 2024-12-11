const express = require("express");
const { generateReport, getReports } = require("../controllers/reportController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Rutas de reportes
router.post("/", protect, authorize("admin", "superadmin"), generateReport);
router.get("/", protect, authorize("admin", "superadmin"), getReports);

module.exports = router;
