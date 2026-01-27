import { Request, Response } from "express";
import { getMicronPerPixel, getRequiredFOV } from "../services/calculation.service";
import { selectCameras } from "../services/cameraSelector.service";
import { selectLens } from "../services/lensSelector.service";

export const processVision = (req: Request, res: Response) => {
  const input = req.body;

  const micronPerPixel = getMicronPerPixel(
    input.accuracy,
    input.color
  );

  const requiredFOV = getRequiredFOV(
    input.componentWidth,
    input.componentHeight
  );

  const suitableCameras = selectCameras(
    requiredFOV,
    micronPerPixel,
    input.workingDistance,
    input.color
  );

  const recommendations = suitableCameras.map(cam => ({
    camera: cam,
    lenses: selectLens(cam, requiredFOV, input.workingDistance)
  }));

const focalLength =
  (12.8 * input.workingDistance) / requiredFOV;

res.json({
  calculation: {
    fov: requiredFOV,
    requiredPixels: (requiredFOV * 1000) / micronPerPixel,
    micronPerPixel,
    pixelsPerFeature: input.color ? 3 : 1,
    focalLength
  },
  recommendations
});

};
