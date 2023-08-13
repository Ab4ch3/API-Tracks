import { unlinkSync } from "fs";
import models from "../models/nosql/index.js";
// Importamos Path
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  getAllFiles: async () => {
    let allFiles = await models.storages.find({});

    return allFiles;
  },
  getFile: async (idFile) => {
    let File = await models.storages.findById(idFile);

    return File;
  },
  createFile: async (File) => {
    let newFile = await models.storages.create(File);

    return newFile;
  },
  deleteFile: async (idFile) => {
    let file = await models.storages.findByIdAndDelete(idFile);
    const { filename } = file;
    const filepath = `${__dirname}/../storage/${filename}`;

    unlinkSync(filepath); //Se usa para eliminar recurso fisico guardado en la ruta especificada

    return file;
  },
};
