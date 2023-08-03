// Importamos multer
import multer from "multer";
// import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Se coloca donde se guardara el fail
    const pathStorage = `${__dirname}/../storage`;
    // cb recibe la manera de trabajar con un error y en donde ser guardara.
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    /*  Para realizar una carga de archivo con los datos del timestamp
    En caso tal tambien se puede colocar para q cuando consiga un archivo con el mismo nombre los remplace */
    const ext = file.originalname.split(".").pop(); //Obtener la extension
    const filename = `file-${Date.now()}.${ext}`; // Deberia devolver file-12312.pdf
    cb(null, filename);
  },
});

export default storage;
