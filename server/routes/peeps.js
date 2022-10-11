import express from 'express';
import peepsControls from '../controllers/peepController.js';

const {getAllpeeps} = peepsControls;
const router = express.Router();

router.route('/')
    .get(getAllpeeps);


export default router;

