// Importmos la funcion check
import { check } from "express-validator";
// Importamos el resultado del validador
import validateResults from "../utils/handleValidator.js";

/* 
  Aqui Validaremos los datos basados en 
  el modelo que definimos 
  ejem: name , debe existir y no estar vacio 
  hay otras validaciones revisar la documentacion
  */
const validatorCreateTrack = [
  check("name").exists().notEmpty(),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

export default validatorCreateTrack;
