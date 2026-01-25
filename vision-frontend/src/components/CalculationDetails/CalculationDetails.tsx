import "./CalculationDetails.css";

interface Props {
  open: boolean;
  onClose: () => void;
  calculation: any;
  input: any;
}

const CalculationDetails = ({ open, onClose, calculation, input }: Props) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Vision Calculation Details</h2>

        <div className="modal-content">
          <p>
            <strong>1. Field of View (FOV)</strong><br />
            Component max dimension = {Math.max(input.componentWidth, input.componentHeight)} mm<br />
            Margin applied = 20%<br />
            <em>FOV = {calculation.fov.toFixed(2)} mm</em>
          </p>

          <p>
            <strong>2. Accuracy & Pixel Resolution</strong><br />
            Required accuracy = {input.accuracy} µm<br />
            Rule: 3 pixels per feature<br />
            <em>Resolution = {calculation.micronPerPixel.toFixed(2)} µm / pixel</em>
          </p>

          <p>
            <strong>3. Sensor Resolution Requirement</strong><br />
            Pixels required across FOV:<br />
            <em>{Math.round(calculation.requiredPixels)} pixels</em>
          </p>

          <p>
            <strong>4. Focal Length Estimation</strong><br />
            Assumed sensor width = 12.8 mm (1")<br />
            Working distance = {input.workingDistance} mm<br />
            <em>Focal length ≈ {calculation.focalLength.toFixed(1)} mm</em>
          </p>
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CalculationDetails;
