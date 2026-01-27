import { lenses } from "../data/lenses";

export function selectLens(
  camera: any,
  requiredFOV: number,
  workingDistance: number
) {
  const suitableLenses = lenses.filter(lens => {
    // Sensor coverage check
    if (lens.maxSensorWidth < camera.sensorWidth) return false;

    // Calculate FOV for this lens
    const fov =
      (camera.sensorWidth * workingDistance) / lens.focalLength;

    return fov >= requiredFOV;
  });

  return suitableLenses;
}
