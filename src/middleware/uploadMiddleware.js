// Importamos multer
import multer from "multer";
// Importamos FileUpload
import storage from "../utils/handleStorage.js";

const uploadMiddlware = multer({ storage });

export default uploadMiddlware;
