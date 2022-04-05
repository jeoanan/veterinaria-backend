import express from 'express';
import conectarDB from './config/db.js';
import dotenv from "dotenv";
import cors from 'cors';
import veterinarioRouters from './routes/veterinarioRoutes.js';
import pacienteRouters from './routes/pacienteRoutes.js';

const app = express();
app.use(express.json());
dotenv.config();

conectarDB();

const dominiosPermitidos =[process.env.FRONTEND_URL];

const corsOptions ={
    origin: function(origin,callback){
        if (dominiosPermitidos.indexOf(origin) !== -1){
            //El origen del request está permitido
            callback(null, true)
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}

const port = process.env.PORT || 4000;

app.use(cors(corsOptions))
app.use('/api/veterinarios',veterinarioRouters);
app.use('/api/pacientes',pacienteRouters);

app.listen(port, ()=>{
    console.log(`servidor funcionando en el puerto ${port}`);
});