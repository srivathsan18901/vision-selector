import "./Recommendations.css";

const Recommendations = ({ data }: any) => {
  return (
    <div className="section">
      <h2>Recommended Components</h2>

      <h3>Cameras</h3>
      <ul>
        {data.cameras.map((cam: string) => (
          <li key={cam}>{cam}</li>
        ))}
      </ul>

      <h3>Lenses</h3>
      <ul>
        {data.lenses.map((lens: string) => (
          <li key={lens}>{lens}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
