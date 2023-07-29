// Importamos Debug
import debug from "debug";
const logger = debug("app:module-mongo");
// Importamos moongose
import mongoose from "mongoose";
// Importamos Config
import config from "../config/index.js";

const database = async () => {
  let conection = null;
  try {
    if (!conection) {
      conection = await mongoose.connect(config.DB_URI);
      logger(`**** CONNECTED TO MONGODB ATLAS ****`);
    }
    logger(`**** REUSING TO MONGODB ATLAS ****`);
    conection;
  } catch (e) {
    logger(`**** CONNECTION ERROR ****`);
    logger(e);
  }
};

export default database;
