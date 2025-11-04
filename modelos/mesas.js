import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  numeroMesa: { type: Number, required: true },
  ocupadaMesa: { type: Boolean, required: true },
  comandasMesa: { type: Array, required: false },
});

export default mongoose.model("Mesas", ItemSchema);
