//importamos express
import express from "express";
//importamos cors
import cors from "cors";
// Importamos Morgan
import morganBody from "morgan-body";
// Importamos Debug
import debug from "debug";
const logger = debug("app:module-app");
// Importamos en archivo de Config
import config from "./config/index.js";
// Importamos Conexion mongo
import connectMongo from "./databases/mongodb.js";
// Importamos Conexion sqlserver
import { dbConnectMSSQL } from "./databases/sqlServer.js";
// importamos Rutas
import v1Router from "./routes/v1/index.js";
// Importamos Path
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { IncomingWebhook } from "@slack/webhook";
// import * as fs from "fs";
// Incialaza el Server de Express
const app = express();
const ENGINE_DB = config.ENGINE_DB;

ENGINE_DB === "nosql" ? connectMongo() : dbConnectMSSQL();
// Iniciamos conexion con mongodb
// connectMongo();

// conexion webhook
const webhook = new IncomingWebhook(config.SLACK_WEBHOOK);
// Creamo un Log con Morgan
var accessLogStream = {
  write: (message) => {
    webhook.send({
      text: message,
    });
  },
};

//Indicamos que usaremos morgan , y que estamos en desarrollo
morganBody(app, {
  noColors: true,
  stream: accessLogStream,
  skip: function (req, res) {
    //Nos enviara solo los errores
    return res.statusCode < 400;
  },
});

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
  logger(`SERVER_LISTENING_ON_PORT ${config.PORT}`);
});
