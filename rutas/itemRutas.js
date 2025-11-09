import express from "express";
import Comanda from "../modelos/comandas.js";
import Mesa from "../modelos/mesas.js";
import Plato from "../modelos/platos.js";

const router = express.Router();

// Ruta para recibir platos
router.get("/platos", async (req, res) => {
  const platos = await Plato.find();
  res.json(platos);
});

// Ruta recibir comandas
router.get("/comandas", async (req, res) => {
  const comandas = await Comanda.find();
  res.json(comandas);
});

// Ruta para recibir mesas
router.get("/mesas", async (req, res) => {
  const mesas = await Mesa.find();
  res.json(mesas);
});

// Ruta para guardar platos
router.post("/platos", async (req, res) => {
  const nuevoPlato = new Plato(req.body);
  const platoGuardado = await nuevoPlato.save();
  res.status(201).json(platoGuardado);
});

// Ruta para guardar comandas
router.post("/comandas", async (req, res) => {
  const nuevaComanda = new Comanda(req.body);
  const comandaGuardada = await nuevaComanda.save();
  res.status(201).json(comandaGuardada);
});

// Ruta para guardar mesas
router.post("/mesas", async (req, res) => {
  const nuevaMesa = new Mesa(req.body);
  const mesaGuardada = await nuevaMesa.save();
  res.status(201).json(mesaGuardada);
});

// Ruta actualización platos
router.put("/platos", async (req, res) => {});

// Ruta actualizacion comandas
router.put("/comandas", async (req, res) => {});

// Ruta actualización mesas
router.put("/mesas/:numeroMesa", async (req, res) => {
  try {
    const mesaActualizada = await Mesa.findOneAndUpdate(
      { numeroMesa: req.params.numeroMesa },
      req.body,
      { new: true }
    );
    res.json(mesaActualizada);
    console.log("Mesa actualizada!");
  } catch (error) {
    console.log("Error al actualizar mesa!", error);
    res.status(500).json({ message: "Error al actualizar mesa!" });
  }
});

export default router;
