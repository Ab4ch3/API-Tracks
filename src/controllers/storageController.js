// Importamos servicios
import storageServices from "../services/storageServices.js";
// Importamos debug
import debug from "debug";
const logger = debug("app:module-StoragesController");
// Importamos Errors
import { handleHttpError } from "../utils/handleErrors.js";
// Importamos Config
import config from "../config/index.js";
export default {
  /**
   * Get All Files
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
      handleHttpError(res, "ERROR_GET_FILES");
      next(e);
    }
  },
  /**
   * Get One File
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
        handleHttpError(res, "NOT_FOUND", 404);
      } else {
        res.status(200).json({
          status: "OK",
          data: file,
        });
      }
    } catch (e) {
      logger(e);
      handleHttpError(res, "ERROR_GET_FILE");
      next(e);
    }
  },

  /**
   * Create File
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
      const createdFile = await storageServices.createFile(fileData);
      res.status(201).json({
        status: "OK",
        message: "FILE_CREATED",
        data: createdFile,
      });
    } catch (e) {
      logger(e);
      handleHttpError(res, "ERROR_CREATE_FILE");
      next(e);
    }
  },
  /**
   * Delete File
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
        handleHttpError(res, "NOT_FOUND", 404);
      } else {
        res.status(200).json({
          status: "OK",
          message: "FILE_DELETED",
          data: deletedFile,
        });
      }
    } catch (e) {
      logger(e);
      handleHttpError(res, "ERROR_DELETE_FILE");
      next(e);
    }
  },
};
