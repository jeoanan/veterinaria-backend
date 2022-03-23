import express, { Router } from "express";
import { registrar,perfil,confirmar } from "../controllers/veterinarioController.js";

const veterinarioRouters = express.Router();

veterinarioRouters.post('/', registrar);
veterinarioRouters.get('/perfil',perfil);
veterinarioRouters.get("/confirmar",confirmar)

export default veterinarioRouters;
