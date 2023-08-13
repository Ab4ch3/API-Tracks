// Importamos Router
import routerx from "express-promise-router";
// Importamos Controlador Storages
import storageController from "../../controllers/storageController.js";
// Importamos middleware upload
import uploadMiddlware from "../../middleware/uploadMiddleware.js";
// Asignamos Router
const router = routerx();

// Especificamos Route
/* 
  Recibe el nombre del campo con el que le estas enviando desde el formdata.
  En este caso usaremos single() porq solo enviaras un archivo a la vez
  En caso de querer enviar varios usarios multi()
*/
router
  .get("/:idFile", storageController.getFile)
  .delete("/:idFile", storageController.deleteFile)
  .get("/", storageController.getAllFiles)
  .post("/", uploadMiddlware.single("myfile"), storageController.createFile);

export default router;
