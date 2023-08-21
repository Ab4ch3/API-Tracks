// importamos manejador de errores
import { handleHttpError } from "../utils/handleErrors.js";

const checkRole = (req, res, next) => {
  try {
    // Ya como habiamos inyectado el usuario a req , lo podemos extraer de alli
    const { user } = req;
    // Sacamos el role al que pertenece el usuario
    const rolesByUser = user.role;
  } catch (e) {
    handleHttpError(res, "ERROR_PERMISSION", 403);
  }
  next();
};

export { checkRole };
