// Importamos debug
import debug from "debug";
const logger = debug("app:module-StoragesController");
// Importamos Config
import config from "../config/index.js";
// Importamos servicios
import storageServices from "../services/storageServices.js";
export default {
  /**
   * Crea un registro
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  createFile: async (req, res, next) => {
    try {
      const { file } = req;
      const fileData = {
        url: `${config.PUBLIC_URL}/${file.filename}`,
        filename: file.filename,
      };
      if (!fileData || Object.keys(fileData).length === 0) {
        res.status(400).send({
          status: "ERROR",
          message: "Bad Request",
        });
      } else {
        const createdFile = await storageServices.createFile(fileData);
        res.status(201).json({
          status: "OK",
          message: "File Created",
          data: createdFile,
        });
      }
    } catch (e) {
      logger(e);
      res.status(500).json({
        status: "ERROR",
        message: "Internal Server Error",
      });
      next(e);
    }
  },
};
