import "./result.css";

const Results = ({ data }: any) => {
  return (
<div className="section">
  <h2>Calculation Results</h2>
  <p className="subtitle">Derived from optical and accuracy constraints</p>

  <div className="metrics">
    <div className="metric">
      <span>Required Field of View</span>
      <strong>{data.fov.toFixed(1)} mm</strong>
    </div>

    <div className="metric">
      <span>Required Pixel Resolution</span>
      <strong>{Math.ceil(data.requiredPixels)} px</strong>
    </div>

    <div className="metric">
      <span>Recommended Focal Length</span>
      <strong>{data.focalLength.toFixed(1)} mm</strong>
    </div>

    <div className="metric">
      <span>Achievable Accuracy</span>
      <strong>{data.micronPerPixel.toFixed(2)} µm/px</strong>
    </div>
  </div>
</div>


  );
};

export default Results;
