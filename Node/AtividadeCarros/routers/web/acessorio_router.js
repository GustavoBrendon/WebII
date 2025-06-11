import { createAcessorio, listAcessorios, editAcessorio, deleteAcessorio, saveAcessorio } from "../../controllers/web/acessorio_controller.js";
import { Router } from "express";

const acessorio_web_router = Router();
acessorio_web_router.get('/', listAcessorios);
acessorio_web_router.post('/create', createAcessorio);
acessorio_web_router.post('/edit', editAcessorio);
acessorio_web_router.post('/save', saveAcessorio);
acessorio_web_router.post('/delete', deleteAcessorio);

export default acessorio_web_router;