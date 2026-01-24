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

  <div className="form-grid">
    <div className="form-group">
      <label>Component Width (mm)</label>
      <input name="componentWidth" onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Component Height (mm)</label>
      <input name="componentHeight" onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Working Distance (mm)</label>
      <input name="workingDistance" onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Required Accuracy (µm)</label>
      <input name="accuracy" onChange={handleChange} />
    </div>
  </div>

  <div className="form-actions">
    <div className="toggle">
      <input type="checkbox" name="color" onChange={handleChange} />
      <span>Color Camera</span>
    </div>

    <button onClick={handleSubmit}>Calculate</button>
  </div>
</div>

  );
};

export default InputForm;
