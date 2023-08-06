// Importamos debug
import debug from "debug";
const logger = debug("app:module-StoragesController");
// Importamos Config
import config from "../config/index.js";
// Importamos servicios
import storageServices from "../services/storageServices.js";
export default {
  /**
   * Traera Todos los Registros
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getAllFiles: async (req, res, next) => {
    try {
      const allFiles = await storageServices.getAllFiles();
      res.status(200).json({
        status: "OK",
        data: allFiles,
      });
    } catch (e) {
      logger(e);
      res.status(500).json({
        status: "ERROR",
        message: "Internal Server Error",
      });
      next(e);
    }
  },
  /**
   * Traera un solo registro
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getFile: async (req, res, next) => {
    try {
      const {
        params: { idFile },
      } = req;
      const file = await storageServices.getFile(idFile);
      if (!file) {
        res.status(404).send({
          status: "ERROR",
          message: "Not Found",
        });
      } else {
        res.status(200).json({
          status: "OK",
          data: file,
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
  /**
   * Eliminara un registro
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  deleteFile: async (req, res, next) => {
    try {
      const {
        params: { idFile },
      } = req;
      const deletedFile = await storageServices.deleteFile(idFile);
      if (!deletedFile) {
        res.status(404).send({
          status: "ERROR",
          message: "Not Found",
        });
      } else {
        res.status(200).json({
          status: "OK",
          message: "File Deleted",
          data: deletedFile,
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
