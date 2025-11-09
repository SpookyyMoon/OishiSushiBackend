import mongoose from "mongoose";

const PlatoSchema = new mongoose.Schema({
  nombrePlato: { type: String, required: true },
  precioPlato: { type: Number, required: true },
  categoriaPlato: { type: String, required: true },
  unidadesPlato: { type: Number, required: true }
});

const Plato =  mongoose.model("Plato", PlatoSchema);


export async function SeeddingPlatos() {
  const conteoPlatos = await Plato.countDocuments();

  if (conteoPlatos == 0){
    const platosIniciales = [
      { nombrePlato: "Nigiri de Gambas", precioPlato: 10, categoriaPlato: "Sushi", unidadesPlato: 4 },
      { nombrePlato: "Nigiri de Atún", precioPlato: 8, categoriaPlato: "Sushi", unidadesPlato: 4 },
      { nombrePlato: "Nigiri de Salmón", precioPlato: 8.50, categoriaPlato: "Sushi", unidadesPlato: 4 },
      { nombrePlato: "Hosomaki", precioPlato: 6.50, categoriaPlato: "Rolls", unidadesPlato: 8 },
      { nombrePlato: "Futomaki", precioPlato: 6.50, categoriaPlato: "Rolls", unidadesPlato: 8 },
      { nombrePlato: "Ramen Miso", precioPlato: 6.50, categoriaPlato: "Ramen", unidadesPlato: 1 }
    ]

    await Plato.insertMany(platosIniciales);
    console.log(`Platos iniciales insertados!`);
  }
  else {
    console.log(`Se han cargado ${conteoPlatos} platos desde la colección.`);
  }
}

export default Plato;