import React from "react";
import { useHistory } from "react-router-dom";
import "./completedActivites.css";

const CompletedActivities = ({ completedActivities }) => {
  const history = useHistory();

  const handleReturnHome = () => {
    history.push("/activity");
  };

  if (!completedActivities || !Array.isArray(completedActivities)) {
    return null;
  }

  return (
    <div className="completed-activities-container">
      <h3>Completed Activities</h3>
      <ul>
        {completedActivities.map((activity, index) => (
          <li key={index}>
            <span className="list-icon">&#10003;</span>&nbsp;{activity}
          </li>
        ))}
      </ul>
      <button className="return-button" onClick={handleReturnHome}>
        Return to Home
      </button>
    </div>
  );
};

export default CompletedActivities;
