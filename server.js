const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexión:", err));

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/condominios", require("./routes/condominiums"));
app.use("/api/reservas", require("./routes/reservations"));
app.use("/api/pagos", require("./routes/payments"));
app.use("/api/reportes", require("./routes/reports"));

// Levantar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
