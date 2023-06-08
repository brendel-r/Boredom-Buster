import React, { useState, useEffect } from "react";
import { fetchAllData } from "../../apiCalls";
import "./activity.css";
import { useHistory } from "react-router-dom";

const Activity = ({ addCompletedActivity }) => {
  const [currentActivity, setCurrentActivity] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [data] = await fetchAllData();
      setCurrentActivity(data);
    } catch (error) {
      console.error("Error fetching activity:", error);
    }
  };

  const fetchNewActivity = async () => {
    try {
      const [data] = await fetchAllData();
      setCurrentActivity(data);
    } catch (error) {
      console.error("Error fetching new activity:", error);
    }
  };

  const handleSkipClick = async () => {
    await fetchNewActivity();
  };

  const handleCompletedClick = async () => {
    if (currentActivity) {
      addCompletedActivity(currentActivity.activity);
      console.log("Completed Activity:", currentActivity.activity);
      await fetchNewActivity();
    }
  };

  const history = useHistory();

  const handleShowCompletedList = () => {
    history.push("/completed");
  };

  return (
    <div className="activity-card">
      <div className="completed-list-container">
        <button className="completed-list-button" onClick={handleShowCompletedList}>
          Completed Activity List
        </button>
      </div>

      {currentActivity ? (
        <>
          <h2 className="current-activity">{currentActivity.activity}</h2>
          <p className="current-activity-type">Type: {currentActivity.type}</p>
          <p className="current-activity-people">
            Participants: At least {currentActivity.participants}
          </p>
        </>
      ) : (
        <p>Loading activity...</p>
      )}

      <div className="button-container">
        <button className="skip-button" onClick={handleSkipClick}>
          Skip
        </button>
        <button className="completed-button" onClick={handleCompletedClick}>
          Completed
        </button>
      </div>
    </div>
  );
};

export default Activity;
