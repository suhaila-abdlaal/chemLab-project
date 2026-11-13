
import "./ExperimentCard.css";

function ExperimentCard(props) {
  return (
    <div className="experiment-card">
      <h3>{props.name}</h3>

      <p>{props.description}</p>

      <span>{props.level}</span>

      <button>View Experiment</button>
    </div>
  );
}

export default ExperimentCard;
