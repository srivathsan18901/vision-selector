import { Request, Response } from "express";
import { calculateVision } from "../services/calculation.service";
import { recommendComponents } from "../services/recommendation.service";

export const processVision = async (req: Request, res: Response) => {
  const input = req.body;

  const calculation = calculateVision(input);

  const focalLength =
    (12.8 * input.workingDistance) / calculation.fov; // assume 1" sensor

  const recommendations = await recommendComponents(
    calculation.requiredPixels,
    input.color,
    focalLength
  );

  res.json({
    calculation: {
      ...calculation,
      focalLength
    },
    recommendations
  });
};
