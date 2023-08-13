// Importamos Router
import routerx from "express-promise-router";
// Importamos Controlador Auth
import authController from "../../controllers/authController.js";
// Importamos Validadores
import {
  validatorRegister,
  validatorLogin,
} from "../../middleware/validators/authValidator.js";
// Asignamos Router
const router = routerx();

// Especificamos Route
/*
 */
router
  .post("/register", validatorRegister, authController.register)
  .post("/login", validatorLogin, authController.login);

export default router;
