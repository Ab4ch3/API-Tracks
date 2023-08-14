import dotenv from "dotenv";
dotenv.config();

const Config = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI,
  PUBLIC_URL: process.env.PUBLIC_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  SLACK_WEBHOOK: process.env.SLACK_WEBHOOK,
  SQL_DATABASE: process.env.SQL_DATABASE,
  SQL_USER: process.env.SQL_USER,
  SQL_PASSWORD: process.env.SQL_PASSWORD,
  SQL_HOST: process.env.SQL_HOST,
  ENGINE_DB: process.env.ENGINE_DB,
};

export default Config;
