const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware para verificar autenticación
exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "No autorizado" });
    }
  }
  if (!token) {
    return res.status(401).json({ message: "No autorizado, sin token" });
  }
};

// Middleware para roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "No tienes permiso para realizar esta acción" });
    }
    next();
  };
};
