// Importamos Router
import routerx from "express-promise-router";
// Importamos Controlador Tracks
import tracksController from "../../controllers/tracksController.js";

// Asignamos Router
const router = routerx();

// Especificamos Route
router.get("/", tracksController.getAllTracks);
export default router;
