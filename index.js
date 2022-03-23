import express from 'express';
import conectarDB from './config/db.js';
import dotenv from "dotenv";
import veterinarioRouters from './routes/veterinarioRoutes.js';

const app = express();
app.use(express.json());
dotenv.config();

conectarDB();

const port = process.env.PORT || 4000;

app.use('/api/veterinarios',veterinarioRouters);

app.listen(port, ()=>{
    console.log(`servidor funcionando en el puerto ${port}`);
});