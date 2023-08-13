// Importamos moongose
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: ["user", "admin"], default: "user" },
  created_at: { type: Date, default: Date.now },
});

const User = mongoose.model("user", userSchema);

export default User;
