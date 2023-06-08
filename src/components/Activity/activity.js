import React, { useState, useEffect } from 'react';
import { fetchAllData } from '../../apiCalls';
import './activity.css';

const Activity = () => {
  const [currentActivity, setCurrentActivity] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [data] = await fetchAllData();
      setCurrentActivity(data);
    } catch (error) {
      console.error('Error fetching activity:', error);
    }
  };

  const handleSkipClick = async () => {
    try {
      const [data] = await fetchAllData();
      setCurrentActivity(data);
    } catch (error) {
      console.error('Error fetching new activity:', error);
    }
  };

  return (
    <div className='activity-card'>
      {currentActivity ? (
        <>
          <h2 className='current-activity'>{currentActivity.activity}</h2>
          <p className='current-activity-type'>Type: {currentActivity.type}</p>
          <p className='current-activity-people'>Participants: At least {currentActivity.participants}</p>
        </>
      ) : (
        <p>Loading activity...</p>
      )}

      <div className='button-container'>
        <button className='skip-button' onClick={handleSkipClick}>Skip</button>
        <button className='completed-button'>Completed</button>
      </div>
    </div>
  );
};

export default Activity;
