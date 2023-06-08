
import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchAPI } from './apiCalls.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/header';
import Activity from './components/Activity/activity';
import CompletedActivities from './components/Completed/completedActivites';

// function App() {
//   const [data, setData] = useState({});
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [completedActivities, setCompletedActivities] = useState([]);

//   const toggleMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetchAPI('http://www.boredapi.com/api/activity/');
//         setData(response);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Router>
//       <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//         <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />

//         <Switch>
//           <Route exact path="/completed">
//             <CompletedActivities completedActivities={completedActivities} />
//           </Route>
//           <Route path="/">
//             <Activity
//               data={data}
//               completedActivities={completedActivities}
//               setCompletedActivities={setCompletedActivities}
//             />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;


function App() {
  const [data, setData] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [completedActivities, setCompletedActivities] = useState([]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAPI('http://www.boredapi.com/api/activity/');
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addCompletedActivity = (activity) => {
    setCompletedActivities((prevActivities) => [...prevActivities, activity]);
  };

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />

        <Switch>
          <Route exact path="/completed">
            <CompletedActivities completedActivities={completedActivities} />
          </Route>
          <Route path="/">
            <Activity addCompletedActivity={addCompletedActivity} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
