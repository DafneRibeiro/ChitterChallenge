import express from 'express';
import {register, register1} from "../controllers/authControllers.js";
import {login} from "../controllers/authControllers.js";
import checkUser from '../middlewares/authMiddleware.js';

export const router = express.Router();

router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);
router.post("/peeps", register1)


export default router;
