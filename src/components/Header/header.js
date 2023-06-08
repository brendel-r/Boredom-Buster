import React, { useEffect, useState } from "react";
import './header.css';
import logo from '../../assets/bb-logo.png';
import slogans from '../../assets/Slogans.js';

const Header = ({ isDarkMode, toggleMode }) => {
  const [randomSlogan, setRandomSlogan] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * slogans.length);
    setRandomSlogan(slogans[randomIndex]);
  }, []);

  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <img src={logo} id="header-logo" alt="Boredom Buster Logo" />
          <h1 className="slogan">{randomSlogan}</h1>
        </div>
        <div className="toggle-btn">
          <button onClick={toggleMode} className="mode-toggle-button">
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
