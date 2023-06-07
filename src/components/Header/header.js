import { Link } from "react-router-dom";
import './header.css';
import logo from '../../assets/bb-logo.png' ;


const Header = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <img src={logo} id="header-logo" alt="Boredom Buster Logo" />
      </Link>
      <h1 className="slogan">Elevate your beauty game with Glam Squad!</h1>
    </header>
  );
};

export default Header;