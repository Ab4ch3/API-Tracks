// Importamos moongose
import mongoose, { Schema } from "mongoose";

const storageSchema = new Schema({
  url: { type: String },
  filename: { type: String },
  created_at: { type: Date, default: Date.now },
});

const Storage = mongoose.model("storage", storageSchema);

export default Storage;
