// Importamos Router
import routerx from "express-promise-router";
// Importamos Controlador Tracks
import storageController from "../../controllers/storageController.js";

// Asignamos Router
const router = routerx();

// Especificamos Route
router.post("/", (req, res) => {
  res.send({ a: 1 });
});

export default router;
