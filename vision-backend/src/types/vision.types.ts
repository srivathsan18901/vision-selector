export interface VisionInput {
  componentWidth: number;   // mm
  componentHeight: number;  // mm
  workingDistance: number;  // mm
  accuracy: number;         // microns
  color: boolean;
}

export interface CalculationResult {
  fov: number;
  requiredPixels: number;
  micronPerPixel: number;
  focalLength: number;
}

