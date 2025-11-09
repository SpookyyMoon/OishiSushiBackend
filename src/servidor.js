import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import rutas from "../rutas/itemRutas.js"
import { SeeddingMesas } from "../modelos/mesas.js";
import { SeeddingPlatos } from "../modelos/platos.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(rutas);

const PORT = process.env.PORT || 3000;
connectDB().then(async () => {
  app.listen(PORT, () => console.log(`API en ${PORT}`));
  await SeeddingMesas();
  await SeeddingPlatos();
});