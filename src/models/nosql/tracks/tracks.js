// Importamos moongose
import mongoose, { Schema } from "mongoose";

const trackSchema = new Schema({
  name: { type: String },
  album: { type: String },
  cover: {
    type: String,
    validator: (req) => {
      return true;
    },
    message: "ERROR_URL",
  }, //Es para crear un validacion del datos
  artist: {
    name: { type: String },
    nickname: { type: String },
    nacionality: { type: String },
  }, //Datos compuestos de datos
  duration: {
    start: { type: Number },
    end: { type: Number },
  },
  mediaId: { type: mongoose.Types.ObjectId }, //objecID en moongoose
  created_at: { type: Date, default: Date.now },
});

const Track = mongoose.model("track", trackSchema);

export default Track;
