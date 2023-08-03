//importamos express
import express from "express";
//importamos cors
import cors from "cors";
// Importamos Morgan
import morgan from "morgan";
// Importamos Debug
import debug from "debug";
const logger = debug("app:module-app");
// Importamos en archivo de Config
import config from "./config/index.js";
// Importamos Conexion mongo
import connectMongo from "./databases/mongodb.js";
// importamos Rutas
import v1Router from "./routes/v1/index.js";
// Importamos Path
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Incialaza el Server de Express
const app = express();

// Iniciamos conexion con mongodb
connectMongo();

//Indicamos que usaremos morgan , y que estamos en desarrollo
app.use(morgan("dev"));

// Indicamos que usarmemos Cors
app.use(cors());
//Indicamos que usaremos el middleware de express para habilitar el recibir data al servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Indicas a express , cual es la ruta de los archivos publicos
app.use(express.static(path.join(__dirname, "storage")));

// Invocamos Rutas
app.use(v1Router);

app.listen(config.PORT, () => {
  logger(`Servidor escuchando por el puerto ${config.PORT}`);
});
