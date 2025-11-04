import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  numeroMesa: { type: Number, required: true },
  pedidoPlatos: { type: Array, required: true },
  atendidaComanda: { type: Boolean, required: true, default: false },
  pagadoComanda: { type: Boolean, required: true, default: false },
});

export default mongoose.model("Comandas", ItemSchema);
