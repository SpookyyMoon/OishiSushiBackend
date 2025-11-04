import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import rutas from "../rutas/itemRutas.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/items", rutas);

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`API en ${PORT}`));
});
