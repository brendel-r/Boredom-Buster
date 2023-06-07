import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchAPI } from './apiCalls.js';
import Header from './components/Header/header';
import Activity from './components/Activity/activity';

function App() {
  const [data, setData] = useState({});

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
    <div>
      <Header />
      <h1>Bored Activity</h1>
      <Activity data={data} />
    </div>
  );
}

export default App;