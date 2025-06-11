import { createMotorista, deleteMotorista, editMotorista, listMotoristas, saveMotorista } from "../../controllers/web/motorista_controller.js";
import { Router } from "express";

const motorista_web_router = Router();
motorista_web_router.get('/', listMotoristas);
motorista_web_router.post('/create', createMotorista);
motorista_web_router.post('/edit', editMotorista);
motorista_web_router.post('/save', saveMotorista);
motorista_web_router.post('/delete', deleteMotorista);

export default motorista_web_router;