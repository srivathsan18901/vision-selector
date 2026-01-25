import { Schema, model } from "mongoose";

const CameraSchema = new Schema({
  vendor: String,
  model: String,
  resolutionX: Number,
  resolutionY: Number,
  sensorSize: String,
  pixelSize: Number,
  color: Boolean,
  mount: String
});

export default model("Camera", CameraSchema);
