import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({
  name: { type: String},
  username: { type: String },
  content: { type: String, required: true },
  createdAt: { type: Date, default: new Date()}
});

const Peep = mongoose.model('Peep', peepSchema)

export default Peep;

