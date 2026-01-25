import "./Result.css";
import { useState } from "react";
import CalculationDetails from "../CalculationDetails/CalculationDetails";

const Result = ({ data, input }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="section">
      <div className="results-header">
        <h2>Calculation Results</h2>
        <span className="view-link" onClick={() => setOpen(true)}>
          View calculation
        </span>
      </div>

      <div className="metrics">
        <div className="metric">
          <span>Required FOV</span>
          <strong>{data.fov} mm</strong>
        </div>
        <div className="metric">
          <span>Min Resolution</span>
          <strong>{Math.round(data.requiredPixels)} px</strong>
        </div>
        <div className="metric">
          <span>Focal Length</span>
          <strong>{data.focalLength.toFixed(1)} mm</strong>
        </div>
        <div className="metric">
          <span>Accuracy</span>
          <strong>{data.micronPerPixel.toFixed(2)} µm/px</strong>
        </div>
      </div>

      <CalculationDetails
        open={open}
        onClose={() => setOpen(false)}
        calculation={data}
        input={input}
      />
    </div>
  );
};

export default Result;
