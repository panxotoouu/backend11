const Condominium = require("../models/Condominium");

// Crear un condominio
exports.createCondominium = async (req, res) => {
  const { name, address, adminFee, spaces } = req.body;
  try {
    const condominium = new Condominium({ name, address, adminFee, spaces });
    await condominium.save();
    res.status(201).json({ message: "Condominio creado exitosamente", condominium });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los condominios
exports.getCondominiums = async (req, res) => {
  try {
    const condominiums = await Condominium.find();
    res.json(condominiums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un condominio por ID
exports.getCondominium = async (req, res) => {
  try {
    const condominium = await Condominium.findById(req.params.id);
    if (!condominium) return res.status(404).json({ message: "Condominio no encontrado" });
    res.json(condominium);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un condominio
exports.updateCondominium = async (req, res) => {
  try {
    const condominium = await Condominium.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!condominium) return res.status(404).json({ message: "Condominio no encontrado" });
    res.json({ message: "Condominio actualizado exitosamente", condominium });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un condominio
exports.deleteCondominium = async (req, res) => {
  try {
    const condominium = await Condominium.findByIdAndDelete(req.params.id);
    if (!condominium) return res.status(404).json({ message: "Condominio no encontrado" });
    res.json({ message: "Condominio eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
