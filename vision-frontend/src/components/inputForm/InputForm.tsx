import { useState } from "react";
import "./InputForm.css";
import type { InputFormProps, VisionInput } from "./InputForm.types";
import { toast } from "react-toastify";


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
  if (form.componentWidth <= 0 || form.componentHeight <= 0 || form.workingDistance <= 0 || form.accuracy <= 0) {
    toast.error("Please fill in all fields with valid values.");
    return;
  }

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

    if (response.ok) {
     toast.success("Vision parameters calculated successfully");
    }

    if (!response.ok) {
      toast.error("Backend service unavailable");
      return;
    }

    const data = await response.json();

    // Send backend result to Home.tsx
    onCalculate(data, form);

  } catch (error) {
    toast.error("Failed to calculate vision parameters");
    return
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
