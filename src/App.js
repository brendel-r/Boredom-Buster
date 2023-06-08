// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { fetchAPI } from './apiCalls.js';
// import Header from './components/Header/header';
// import Activity from './components/Activity/activity';

// function App() {
//   const [data, setData] = useState({});
//   const [isDarkMode, setIsDarkMode] = useState(true);

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
//     <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       <Header />

//       <div className="content-container">
//         <button onClick={toggleMode} className="mode-toggle-button">
//           {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//         </button>

//         <Activity data={data} />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchAPI } from './apiCalls.js';
import Header from './components/Header/header';
import Activity from './components/Activity/activity';

function App() {
  const [data, setData] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <Activity data={data} />
      
    </div>
  );
}

export default App;
