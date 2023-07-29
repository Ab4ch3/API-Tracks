// Importamos Router
import routerx from "express-promise-router";
// Importamos Controlador Tracks
import tracksController from "../../controllers/tracksController.js";

// Asignamos Router
const router = routerx();

// Especificamos Route
router.get("/", tracksController.getAllTracks);
router.post("/", tracksController.createTrack);
router.get("/:idTrack", tracksController.getTrack);
router.put("/:idTrack", tracksController.updateTrack);
router.delete("/:idTrack", tracksController.deleteTrack);
export default router;
