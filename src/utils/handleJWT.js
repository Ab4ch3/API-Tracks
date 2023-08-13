// Importamos JWT
import jwt from "jsonwebtoken";
// Importamos Config
import config from "../config/index.js";
/**Esta funcion se encarga de firmar el token
 * Se debe pasar el usuario
 * @param {*} user
 */
// Vendria siendo encode
const tokenSign = async (user) => {
  // Firmamos el payload
  const sign = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    config.JWT_SECRET,
    { expiresIn: "2h" }
  );
  return sign;
};

/**Se encargara de verificar la autenticidad del token
 * Se debe pasar el tokenJWT
 * @param {*} token
 */
const verifyToken = async (token) => {
  try {
    return jwt.verify(token, config.JWT_SECRET);
  } catch (e) {
    return null;
  }
};

export { tokenSign, verifyToken };
