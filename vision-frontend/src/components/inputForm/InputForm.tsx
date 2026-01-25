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

const handleSubmit = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/vision/calculate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    if (!response.ok) {
      throw new Error("Backend calculation failed");
    }

    const data = await response.json();

    // Send backend result to Home.tsx
    onCalculate(data);

  } catch (error) {
    console.error("Error:", error);
    alert("Failed to calculate vision parameters");
  }
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
