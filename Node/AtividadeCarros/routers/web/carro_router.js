import { createCarro, deleteCarro, editCarro, listCarros, saveCarro } from "../../controllers/web/carro_controller.js";
import { Router } from "express";

const carro_web_router = Router();
carro_web_router.get('/', listCarros);
carro_web_router.post('/create', createCarro);
carro_web_router.post('/edit', editCarro);
carro_web_router.post('/save', saveCarro);
carro_web_router.post('/delete', deleteCarro);

export default carro_web_router;