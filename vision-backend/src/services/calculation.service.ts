import { VisionInput } from "../types/vision.types";

export function calculateVision(input: VisionInput) {
  const margin = 1.2;

  const fov = Math.max(
    input.componentWidth,
    input.componentHeight
  ) * margin;

  const micronPerPixel = input.accuracy / 3;

  const requiredPixels = (fov * 1000) / micronPerPixel;

  return {
    fov,
    micronPerPixel,
    requiredPixels
  };
}
