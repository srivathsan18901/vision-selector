export interface VisionInput {
  componentWidth: number;
  componentHeight: number;
  workingDistance: number;
  accuracy: number;
  color: boolean;
}

export interface InputFormProps {
  onCalculate: (data: any, input: VisionInput) => void;
}
