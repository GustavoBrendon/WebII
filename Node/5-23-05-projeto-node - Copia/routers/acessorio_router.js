import { createAcessorio, listAcessorios, editAcessorio, deleteAcessorio } from "../controllers/acessorio_controller.js";
import { Router } from "express";

const acessorio_router = Router();
acessorio_router.get('/', listAcessorios);
acessorio_router.post('/', createAcessorio);
acessorio_router.put('/', editAcessorio);
acessorio_router.delete('/', deleteAcessorio);

export default acessorio_router;