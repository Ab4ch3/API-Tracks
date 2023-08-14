import { Sequelize } from "sequelize";
// Importamos en archivo de Config
import config from "../config/index.js";

const sequelize = new Sequelize(
  config.SQL_DATABASE,
  config.SQL_USER,
  config.SQL_PASSWORD,
  {
    host: config.SQL_HOST,
    dialect: "postgres",
  }
);

const dbConnectMSSQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("SQL_CONNECTION_SUCCESFULL");
  } catch (e) {
    console.log("SQL_ERROR_CONNECTION", e);
  }
};

export { sequelize, dbConnectMSSQL };
