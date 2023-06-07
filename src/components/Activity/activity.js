import React from 'react';
import './activity.css';

const Activity = ({ data }) => {
  return (
    <div>
      <h2>Activity: {data.activity}</h2>
      <p>Type: {data.type}</p>
      <p>Participants: {data.participants} to 5</p>
    </div>
  );
};

export default Activity;