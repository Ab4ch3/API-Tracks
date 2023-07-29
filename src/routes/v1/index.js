// Improtamos router
import routerx from "express-promise-router";
// Importamos las rutas
import tracksRoute from "./tracksRoute.js";
import storagesRoute from "./storageRoute.js";

const router = routerx();

router.use("/api/v1/tracks", tracksRoute);
router.use("/api/v1/storages", storagesRoute);

export default router;
