import mongoose from 'mongoose';
import peepSchema from './peepSchema.js';


const PeepsModel = mongoose.model('Peeps', peepSchema);
export default PeepsModel;