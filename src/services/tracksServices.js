import models from "../models/nosql/index.js";

export default {
  getAllTracks: async () => {
    let allTracks = await models.tracks.find({});

    return allTracks;
  },
  getTrack: async (idTrack) => {
    let Track = await models.tracks.findById(idTrack);

    return Track;
  },
  createTrack: async (track) => {
    let newTrack = await models.tracks.create(track);

    return newTrack;
  },
  updateTrack: async (idTrack, track) => {
    let result = await models.tracks.findByIdAndUpdate(
      idTrack,
      {
        name: track.name,
        album: track.album,
        cover: track.cover,
        artist: track.artist,
        duration: track.duration,
      },
      {
        new: true,
      }
    );
    return result;
  },
  deleteTrack: async (idTrack) => {
    let track = await models.tracks.findByIdAndDelete(idTrack);

    return track;
  },
};
