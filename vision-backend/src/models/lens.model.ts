import { Schema, model } from "mongoose";

const LensSchema = new Schema({
  vendor: String,
  model: String,
  focalLength: Number,
  sensorCoverage: String,
  mount: String,
  resolutionMP: Number
});

export default model("Lens", LensSchema);
