import { createCarro, deleteCarro, editCarro, listCarros } from "../controllers/carro_controller.js";
import { Router } from "express";

const carro_router = Router();
carro_router.get('/', listCarros);
carro_router.post('/', createCarro);
carro_router.put('/', editCarro);
carro_router.delete('/', deleteCarro);

export default carro_router;