// Importamos Router
import routerx from "express-promise-router";
// Importamos Controlador Tracks
import tracksController from "../../controllers/tracksController.js";
// Importamos validador
import {
  validatorCreateTrack,
  validatorIdTrack,
} from "../../middleware/validators/tracksValidator.js";

// Asignamos Router
const router = routerx();

// Especificamos Route
router.get("/", tracksController.getAllTracks);
router.post("/", validatorCreateTrack, tracksController.createTrack);
router.get("/:idTrack", validatorIdTrack, tracksController.getTrack);
router.put("/:idTrack", validatorIdTrack, tracksController.updateTrack);
router.delete("/:idTrack", validatorIdTrack, tracksController.deleteTrack);
export default router;
