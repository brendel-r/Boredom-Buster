import React, { useState, useEffect } from "react";
import { fetchAllData } from "../../apiCalls";
import PropTypes from "prop-types";
import "./activity.css";
import { useHistory } from "react-router-dom";
import { capitalizeType } from "../../utilities";
import ErrorPage from "../Error/errorPage";

const Activity = ({ addCompletedActivity }) => {
  const [currentActivity, setCurrentActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [data] = await fetchAllData();
      setCurrentActivity(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching activity:", error);
      setError(error);
    }
  };

  const fetchNewActivity = async () => {
    try {
      const [data] = await fetchAllData();
      setCurrentActivity(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching new activity:", error);
      setError(error);
    }
  };

  const handleSkipClick = async () => {
    await fetchNewActivity();
  };

  const handleCompletedClick = async () => {
    if (currentActivity) {
      addCompletedActivity(currentActivity.activity);
      console.log(" currentActivity:", currentActivity);
      await fetchNewActivity();
    }
  };

  const history = useHistory();

  const handleShowCompletedList = () => {
    history.push("/completed");
  };

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="activity-card">
      <div className="completed-list-container">
        <button
          className="completed-list-button"
          onClick={handleShowCompletedList}
        >
          View Completed Activity List
        </button>
      </div>

      {currentActivity ? (
        <>
          <h2 className="current-activity">{currentActivity.activity}</h2>
          <p className="current-activity-type">
            Type: {capitalizeType(currentActivity.type)}
          </p>
          <p className="current-activity-people">
            Participants: At least {currentActivity.participants}
          </p>
        </>
      ) : (
        <p>Loading activity...</p>
      )}

      <div className="button-container">
        <button className="skip-button" onClick={handleSkipClick}>
          Skip this Activity
        </button>
        <button className="completed-button" onClick={handleCompletedClick}>
        </button>
      </div>
    </div>
  );
};

Activity.propTypes = {
  addCompletedActivity: PropTypes.func.isRequired,
};

export default Activity;