// Importamos Debug
import debug from "debug";
const logger = debug("app:module-mongo");
// Importamos moongose
import mongoose from "mongoose";
// Importamos Config
import config from "../config/index.js";

const database = async () => {
  try {
    const conn = await mongoose.connect(config.DB_URI);
    if (conn) {
      logger(`**** CONNECTED TO MONGODB ATLAS ****`);
    }
  } catch (e) {
    logger(`**** CONNECTION ERROR ****`);
    logger(e);
  }
};

export default database;
