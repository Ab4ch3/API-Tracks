export default {
  getAllTracks: async (req, res, next) => {
    console.log("llego al controlador");
    res.status(200).json({ data: "Hola Tracks" });
  },
};
