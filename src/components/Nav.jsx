import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <header style={headerStyle}>
        <ul style={listStyle}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </header>
    );
}

export default Nav

const headerStyle = {
  background: "grey",
  height: "10vh",
  width: "100%",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: 'center',
};

const listStyle = {
  width: '50%',
  listStyle: "none",
  display: "flex",
  justifyContent: "space-around",
};