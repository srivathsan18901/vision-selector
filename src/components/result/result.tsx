import "./result.css";

const Results = ({ data }: any) => {
  return (
<div className="section">
  <h2>Calculation Results</h2>

  <div className="metrics">
    <div className="metric">
      <span>Required FOV</span>
      <strong>{data.fov} mm</strong>
    </div>

    <div className="metric">
      <span>Min Resolution</span>
      <strong>{data.resolution}</strong>
    </div>

    <div className="metric">
      <span>Focal Length</span>
      <strong>{data.focalLength}</strong>
    </div>

    <div className="metric">
      <span>Accuracy</span>
      <strong>{data.micronPerPixel} µm/px</strong>
    </div>
  </div>
</div>

  );
};

export default Results;
