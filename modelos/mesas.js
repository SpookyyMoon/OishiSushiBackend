import mongoose from "mongoose";

const MesaEschema = new mongoose.Schema({
  numeroMesa: { type: Number, required: true },
  ocupadaMesa: { type: Boolean, required: true },
  comandasMesa: { type: Array, required: false },
});

const Mesa = new mongoose.model("Mesa", MesaEschema);


export async function SeeddingMesas() {
  const conteoMesas = await Mesa.countDocuments();

  if (conteoMesas == 0){
    const mesasIniciales = [
      { numeroMesa: 1, ocupadaMesa: false, comandasMesa: null },
      { numeroMesa: 2, ocupadaMesa: false, comandasMesa: null },
      { numeroMesa: 3, ocupadaMesa: false, comandasMesa: null },
      { numeroMesa: 4, ocupadaMesa: false, comandasMesa: null },
      { numeroMesa: 5, ocupadaMesa: false, comandasMesa: null }
    ]

    await Mesa.insertMany(mesasIniciales);
    console.log(`Mesas iniciales insertadas!`);
  }
  else {
    console.log(`Se han cargado ${conteoMesas} mesas desde la colección.`);
  }
}

export default Mesa;