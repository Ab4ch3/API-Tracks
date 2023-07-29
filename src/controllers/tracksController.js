// Importar Servicios
import tracksServices from "../services/tracksServices.js";
// Importamos debug
import debug from "debug";
const logger = debug("app:module-TracksController");

export default {
  /**
   * Traera Todos los Resistros
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getAllTracks: async (req, res, next) => {
    try {
      const allTracks = await tracksServices.getAllTracks();
      res.status(200).json({
        status: "OK",
        data: allTracks,
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
  getTrack: async (req, res, next) => {
    try {
      const {
        params: { idTrack },
      } = req;
      const track = await tracksServices.getTrack(idTrack);
      if (!track) {
        res.status(404).send({
          status: "ERROR",
          message: "Not Found",
        });
      } else {
        res.status(200).json({
          status: "OK",
          data: track,
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
   * Creara un registro
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  createTrack: async (req, res, next) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        res.status(400).send({
          status: "ERROR",
          message: "Bad Request",
        });
      } else {
        const createdTrack = await tracksServices.createTrack(body);
        res.status(201).json({
          status: "OK",
          message: "Track Created",
          data: createdTrack,
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
   * Actualizara un registro
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  updateTrack: async (req, res, next) => {
    try {
      const {
        params: { idTrack },
      } = req;
      const { body } = req;
      const updatedtrack = await tracksServices.updateTrack(idTrack, body);
      if (!updatedtrack) {
        res.status(404).send({
          status: "ERROR",
          message: "Not Found",
        });
      } else {
        res.status(200).json({
          status: "OK",
          message: "Track updated",
          data: updatedtrack,
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
  deleteTrack: async (req, res, next) => {
    try {
      const {
        params: { idTrack },
      } = req;
      const deletedtrack = await tracksServices.deleteTrack(idTrack);
      if (!deletedtrack) {
        res.status(404).send({
          status: "ERROR",
          message: "Not Found",
        });
      } else {
        res.status(200).json({
          status: "OK",
          message: "Track Deleted",
          data: deletedtrack,
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
