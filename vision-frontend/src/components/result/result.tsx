import "./Result.css";
import { useState } from "react";

const Results = ({ data, input }: any) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!data || !input) {
    return null;
  }

  return (
    <div className="section">
      <div className="results-header">
        <h2>Calculation Results</h2>

        <span
          className="view-link"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide calculation ▲" : "View calculation ▼"}
        </span>
      </div>

      <div className="metrics">
        <div className="metric">
          <span>Required FOV</span>
          <strong>{data.fov.toFixed(2)} mm</strong>
        </div>
        <div className="metric">
          <span>Min Pixels</span>
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

      {showDetails && (
        <div className="calc-details">
          <h3>Calculation Explanation</h3>

          <p>
            <strong>1. Field of View (FOV)</strong><br />
            Maximum component dimension =
            {Math.max(input.componentWidth, input.componentHeight)} mm<br />
            Safety margin = 20%<br />
            <em>FOV = {data.fov.toFixed(2)} mm</em>
          </p>

          <p>
            <strong>2. Accuracy & Pixel Resolution</strong><br />
            Required accuracy = {input.accuracy} µm<br />
            Camera type = {input.color ? "Color (Bayer)" : "Monochrome"}<br />
            Rule applied = {data.pixelsPerFeature} pixels per feature<br />
            <em>
              Resolution = {data.micronPerPixel.toFixed(2)} µm / pixel
            </em>
          </p>


          <p>
            <strong>3. Required Sensor Resolution</strong><br />
            FOV converted to microns = {Math.round(data.fov * 1000)} µm<br />
            <em>Pixels required ≈ {Math.round(data.requiredPixels)} px</em>
          </p>

          <p>
            <strong>4. Focal Length Estimation</strong><br />
            Sensor width assumed = 12.8 mm (1")<br />
            Working distance = {input.workingDistance} mm<br />
            <em>Focal length ≈ {data.focalLength.toFixed(1)} mm</em>
          </p>
        </div>
      )}
    </div>
  );
};

export default Results;
