import "./Recommendations.css";

const Recommendations = ({ data }: any) => {
  const cameras = Array.isArray(data?.cameras) ? data.cameras : [];
  const lenses = Array.isArray(data?.lenses) ? data.lenses : [];

  return (
    <div className="section">
      <h2>Recommended Components</h2>

      <div className="card-grid">
        <div className="card">
          <h3>Cameras</h3>

          {cameras.length === 0 ? (
            <p>No suitable cameras found</p>
          ) : (
            cameras.map((cam: any) => (
              <span
                key={cam._id || cam}
                className="badge"
              >
                {cam.model || cam}
              </span>
            ))
          )}
        </div>

        <div className="card">
          <h3>Lenses</h3>

          {lenses.length === 0 ? (
            <p>No suitable lenses found</p>
          ) : (
            lenses.map((lens: any) => (
              <span
                key={lens._id || lens}
                className="badge"
              >
                {lens.model || lens}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
