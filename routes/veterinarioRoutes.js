import express, { Router } from "express";
import { registrar,perfil,confirmar,autenticar,olvidePassword,comprobarToken,nuevoPassword }
 from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const veterinarioRouters = express.Router();

//Area Publica
veterinarioRouters.post("/", registrar);
veterinarioRouters.get("/confirmar/:token",confirmar);
veterinarioRouters.post("/login", autenticar);
veterinarioRouters.post("/olvide-password", olvidePassword);
veterinarioRouters.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword)
//Area privada
veterinarioRouters.get("/perfil", checkAuth ,perfil);

export default veterinarioRouters;
