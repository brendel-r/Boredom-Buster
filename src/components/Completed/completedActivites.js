import React from 'react';
import './completedActivites.css';

const CompletedActivities = ({ completedActivities }) => {
  if (!completedActivities || !Array.isArray(completedActivities)) {
    return null; // Return null or a placeholder component if the prop is invalid
  }

  return (
    <div>
      <h3>Completed Activities</h3>
      <ul>
        {completedActivities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedActivities;
