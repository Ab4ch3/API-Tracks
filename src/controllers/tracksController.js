// Importar Servicios
import tracksServices from "../services/tracksServices.js";
// Importamos Errors
import { handleHttpError } from "../utils/handleErrors.js";
// Importamos debug
import debug from "debug";
const logger = debug("app:module-TracksController");
// Importamos Validador
import { body, matchedData } from "express-validator";

export default {
  /**
   * Get All Tracks
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
      handleHttpError(res, "ERROR_GET_TRACKS");
      next(e);
    }
  },
  /**
   * Get One Track
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getTrack: async (req, res, next) => {
    try {
      // const {
      //   params: { idTrack },
      // } = req;
      /* Manera de hacerlo desde matchedData */
      req = matchedData(req);
      const { idTrack } = req;
      const track = await tracksServices.getTrack(idTrack);
      if (!track) {
        handleHttpError(res, "NOT_FOUND", 404);
      } else {
        res.status(200).json({
          status: "OK",
          data: track,
        });
      }
    } catch (e) {
      logger(e);
      handleHttpError(res, "ERROR_GET_TRACK");
      next(e);
    }
  },
  /**
   * Create Track
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  createTrack: async (req, res, next) => {
    try {
      const body = matchedData(req); //Nosm permite tener una data limpia sin datos basuras que se puedieran colar en el body
      // const { body } = req;
      const createdTrack = await tracksServices.createTrack(body);
      res.status(201).json({
        status: "OK",
        message: "TRACK_CREATED",
        data: createdTrack,
      });
    } catch (e) {
      logger(e);
      handleHttpError(res, "ERROR_CREATE_TRACK");
      next(e);
    }
  },
  /**
   * Update Track
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  updateTrack: async (req, res, next) => {
    try {
      // const {
      //   params: { idTrack },
      // } = req;
      const { idTrack, ...body } = matchedData(req); //Estamos creando 2 objetos
      const updatedtrack = await tracksServices.updateTrack(idTrack, body);
      if (!updatedtrack) {
        handleHttpError(res, "NOT_FOUND", 404);
      } else {
        res.status(200).json({
          status: "OK",
          message: "TRACK_UPDATED",
          data: updatedtrack,
        });
      }
    } catch (e) {
      logger(e);
      handleHttpError(res, "ERROR_UPDATE_TRACK");
      next(e);
    }
  },
  /**
   * Delete Track
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  deleteTrack: async (req, res, next) => {
    try {
      req = matchedData(req);
      const { idTrack } = req;
      const deletedtrack = await tracksServices.deleteTrack(idTrack);
      if (!deletedtrack) {
        handleHttpError(res, "NOT_FOUND", 404);
      } else {
        res.status(200).json({
          status: "OK",
          message: "TRACK_DELETED",
          data: deletedtrack,
        });
      }
    } catch (e) {
      logger(e);
      handleHttpError(res, "ERROR_DELETE_TRACK");
      next(e);
    }
  },
};
