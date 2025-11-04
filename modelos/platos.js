import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  nombrePlato: { type: String, required: true },
  precioPlato: { type: Number, required: true },
  unidadesPlato: { type: Number, required: true }
});

export default mongoose.model('Platos', ItemSchema);