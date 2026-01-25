import "./Recommendations.css";

const Recommendations = ({ data }: any) => {
  return (
<div className="section">
  <h2>Recommended Components</h2>

  <div className="card-grid">
    <div className="card">
      <h3>Cameras</h3>
      {data.cameras.map((cam: string) => (
        <span key={cam} className="badge">{cam}</span>
      ))}
    </div>

    <div className="card">
      <h3>Lenses</h3>
      {data.lenses.map((lens: string) => (
        <span key={lens} className="badge">{lens}</span>
      ))}
    </div>
  </div>
</div>

  );
};

export default Recommendations;
