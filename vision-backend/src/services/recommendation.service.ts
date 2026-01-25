import Camera from "../models/camera.model";
import Lens from "../models/lens.model";

export async function recommendComponents(
  requiredPixels: number,
  color: boolean,
  focalLength: number
) {
  const cameras = await Camera.find({
    resolutionX: { $gte: requiredPixels },
    color
  });

  const lenses = await Lens.find({
    focalLength: { $gte: focalLength - 10, $lte: focalLength + 10 }
  });

  return { cameras, lenses };
}
