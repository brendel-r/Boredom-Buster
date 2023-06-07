import React from 'react';
import './activity.css';

const Activity = ({ data }) => {
  return (
    <div className='activity-card'>
      <h2 className='current-activity'>{data.activity}</h2>
      <p className='current-activity-type'>Type: {data.type}</p>
      <p className='current-activity-people'>Participants: At least {data.participants} </p>
    </div>
  );
};

export default Activity;