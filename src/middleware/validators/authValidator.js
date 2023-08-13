// Importmos la funcion check
import { check } from "express-validator";
// Importamos el resultado del validador
import validateResults from "../../utils/handleValidator.js";

const validatorRegister = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("age").exists().notEmpty().isNumeric(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

export { validatorRegister, validatorLogin };
