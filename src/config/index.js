import dotenv from "dotenv";
dotenv.config();

const Config = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI,
  PUBLIC_URL: process.env.PUBLIC_URL,
};

export default Config;
