const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, sparse: true },
  role: {
    type: String,
    enum: ["superadmin", "admin", "conserje", "directiva", "residente"],
    required: true,
  },
  condominium: { type: mongoose.Schema.Types.ObjectId, ref: "Condominium" },
});

// Encriptar contraseñas
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", userSchema);
