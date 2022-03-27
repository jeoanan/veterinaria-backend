import express from "express";
import checkAuth from '../middleware/authMiddleware.js';
const pacienteRouters = express.Router();
import { agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente 
    } from "../controllers/pacienteController.js";

pacienteRouters
    .route('/')
    .post(checkAuth, agregarPaciente)
    .get(checkAuth, obtenerPacientes);

pacienteRouters
    .route('/:id')
    .get(checkAuth, obtenerPaciente)
    .put(checkAuth, actualizarPaciente)
    .delete(checkAuth, eliminarPaciente);

export default pacienteRouters;