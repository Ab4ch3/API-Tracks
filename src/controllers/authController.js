// Importamos servicios
import authServices from "../services/authServices.js";
// Importamos debug
import debug from "debug";
const logger = debug("app:module-AuthController");
// Importamos Errors
import { handleHttpError } from "../utils/handleErrors.js";
// Importamo Limpiador de data
import { matchedData } from "express-validator";

export default {
  /**
   * Register user
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  register: async (req, res, next) => {
    try {
      // req = matchedData(req);
      // res.send({ data: req });
      const body = matchedData(req); //Nos permite tener una data limpia sin datos basuras que se puedieran colar en el body
      const newRegister = await authServices.register(body);
      res.status(201).json({
        status: "OK",
        message: "REGISTER_CREATED",
        data: newRegister,
      });
    } catch (e) {
      logger(e);
      handleHttpError(res, "ERROR_REGISTER_USER");
      next(e);
    }
  },
  login: async (req, res, next) => {
    try {
      const body = matchedData(req); //Nos permite tener una data limpia sin datos basuras que se puedieran colar en el body
      const user = await authServices.login(body);
      if (!user) {
        return handleHttpError(res, "NOT_FOUND", 404);
      }
      if (Object.hasOwn(user, "error")) {
        return handleHttpError(res, "UNAUTHORIZED", 401);
      } else {
        res.status(201).json({
          status: "OK",
          message: "LOGIN_SUCCESFULL",
          data: user,
        });
      }
    } catch (e) {
      logger(e);
      handleHttpError(res, "ERROR_LOGIN_USER");
      next(e);
    }
  },
};
