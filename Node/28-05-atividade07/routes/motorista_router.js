import { createMotorista, listMotoristas, editMotorista, deleteMotorista } from "../controllers/motorista_controller.js";
import { Router } from "express";

const motorista_router = Router();

motorista_router.get('/', listMotoristas);
motorista_router.post('/', createMotorista);
motorista_router.put('/', editMotorista);
motorista_router.delete('/', deleteMotorista);

export default motorista_router;
