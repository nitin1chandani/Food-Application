import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <Link to="/">
      <img
        src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg"
        className="logo"
        alt=""
      />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <Title />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li>Contact</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Cart</li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
