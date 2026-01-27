import { cameras } from "../data/cameras";

export function selectCameras(
  requiredFOV: number,
  micronPerPixel: number,
  workingDistance: number,
  isColor: boolean
) {
  return cameras.filter(cam => {
    // 1️⃣ Color / Mono match
    if (cam.color !== isColor) return false;

    // 2️⃣ Can camera resolve required accuracy?
    const cameraFOV = cam.resolutionX * micronPerPixel / 1000; // mm

    if (cameraFOV < requiredFOV) return false;

    return true;
  });
}
