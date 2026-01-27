export function getMicronPerPixel(
  accuracy: number,
  isColor: boolean
) {
  const pixelsPerFeature = isColor ? 3 : 1;
  return accuracy / pixelsPerFeature;
}

export function getRequiredFOV(
  width: number,
  height: number
) {
  const margin = 1.2;
  return Math.max(width, height) * margin;
}
