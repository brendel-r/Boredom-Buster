import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './header.css';
import logo from '../../assets/bb-logo.png';
import slogans from '../../assets/Slogans.js';

const Header = () => {
  const [randomSlogan, setRandomSlogan] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * slogans.length);
    setRandomSlogan(slogans[randomIndex]);
  }, []);

  return (
    <header>
      <div className="header-container">
      <Link to="/">
        <img src={logo} id="header-logo" alt="Boredom Buster Logo" />
      </Link>
      <h1 className="slogan">{randomSlogan}</h1>
      </div>
    </header>
  );
};

export default Header;
