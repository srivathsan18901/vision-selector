export function scoreCamera(camera: any, requiredPixels: number) {
  const pixelScore = requiredPixels / camera.resolutionX;
  return Math.min(pixelScore, 1);
}
