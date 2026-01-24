import { useState } from "react";
import "./InputForm.css";
import type { InputFormProps, VisionInput } from "./InputForm.types";


const InputForm = ({ onCalculate }: InputFormProps) => {
  const [form, setForm] = useState<VisionInput>({
    componentWidth: 0,
    componentHeight: 0,
    workingDistance: 0,
    accuracy: 0,
    color: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : Number(value),
    });
  };

  const handleSubmit = () => {
    // MOCK backend response
    onCalculate({
      calculation: {
        fov: 48,
        resolution: "20 MP",
        focalLength: "75–85 mm",
        micronPerPixel: 2.34,
      },
      recommendations: {
        cameras: ["Basler acA5472", "Cognex In-Sight 8405"],
        lenses: ["Edmund 75mm", "Keyence CA-LH75"],
      },
    });
  };

  return (
    <div className="section">
      <h2>Input Parameters</h2>

      <div className="grid">
        <input name="componentWidth" placeholder="Component Width (mm)" onChange={handleChange} />
        <input name="componentHeight" placeholder="Component Height (mm)" onChange={handleChange} />
        <input name="workingDistance" placeholder="Working Distance (mm)" onChange={handleChange} />
        <input name="accuracy" placeholder="Required Accuracy (µm)" onChange={handleChange} />
      </div>

      <label className="checkbox">
        <input type="checkbox" name="color" onChange={handleChange} />
        Color Camera
      </label>

      <button onClick={handleSubmit}>Calculate</button>
    </div>
  );
};

export default InputForm;
