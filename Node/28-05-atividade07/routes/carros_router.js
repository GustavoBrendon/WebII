import { createCarro, deleteCarro, editCarro, listCarro } from "../controllers/carros_controller.js";
import { Router } from "express";

const carros_router = Router();

carros_router.get('/', listCarro);
carros_router.post('/', createCarro);
carros_router.put('/', editCarro);
carros_router.delete('/', deleteCarro);

export default carros_router;

