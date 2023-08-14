// importamos manejador de errores
import { handleHttpError } from "../utils/handleErrors.js";
// Importamos jwt
import { verifyToken } from "../utils/handleJWT.js";
// Importamos modelo
import models from "../models/nosql/index.js";

const authmiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return handleHttpError(res, "NEED_SESSION", 404);
    }
    // lo que hacemos es separa la cadena bear del token real
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);

    if (!dataToken._id) {
      return handleHttpError(res, "ERROR_ID_TOKEN", 401);
    }

    const user = await models.user.findById(dataToken._id);
    // Inyectamos user al req
    req.user = user;

    next();
  } catch (e) {
    handleHttpError(res, "NOT_SESSION", 401);
  }
};

export { authmiddleware };
