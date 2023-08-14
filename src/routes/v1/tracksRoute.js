// Importamos Router
import routerx from "express-promise-router";
// Importamos Controlador Tracks
import tracksController from "../../controllers/tracksController.js";
// Importamos validador
import {
  validatorCreateTrack,
  validatorIdTrack,
} from "../../middleware/validators/tracksValidator.js";
import { authmiddleware } from "../../middleware/session.js";
import { checkRole } from "../../middleware/roles.js";
// Asignamos Router
const router = routerx();

// Especificamos Route
router.get("/", authmiddleware, checkRole, tracksController.getAllTracks);
router.post("/", validatorCreateTrack, tracksController.createTrack);
router.get("/:idTrack", validatorIdTrack, tracksController.getTrack);
router.put("/:idTrack", validatorIdTrack, tracksController.updateTrack);
router.delete("/:idTrack", validatorIdTrack, tracksController.deleteTrack);
export default router;
