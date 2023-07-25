//importamos express
import express from "express";
//importamos cors
import cors from "cors";
// Importamos Morgan
import morgan from "morgan";
// Importamos en archivo de Config
import config from "./config/index.js";

// Incialaza el Server de Express
const app = express();

//Indicamos que usaremos morgan , y que estamos en desarrollo
app.use(morgan("dev"));

// Indicamos que usarmemos Cors
app.use(cors());

app.listen(config.PORT, () => {
  console.log(`Servidor escuchando por el puerto ${config.PORT}`);
});
