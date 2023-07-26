// Improtamos router
import routerx from "express-promise-router";
// Importamos las rutas
import tracksRoute from "./tracksRoute.js";

const router = routerx();

router.use("/api/v1/tracks", tracksRoute);

export default router;
