import "./result.css";

const Results = ({ data }: any) => {
  return (
    <div className="section">
      <h2>Calculation Results</h2>
      <ul>
        <li>Required FOV: {data.fov} mm</li>
        <li>Required Resolution: {data.resolution}</li>
        <li>Recommended Focal Length: {data.focalLength}</li>
        <li>Expected Accuracy: {data.micronPerPixel} µm/px</li>
      </ul>
    </div>
  );
};

export default Results;
