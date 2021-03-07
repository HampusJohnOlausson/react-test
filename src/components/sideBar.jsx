import React from 'react'
import { Link } from "react-router-dom";

const sideBar = () => {
    return (
      <div style={sideBarStyle}>
        <ul style={navStyle}>
          <Link to="/" style={{ color: "white" }}>
            <li>Home</li>
          </Link>
          <Link to="/about" style={{ color: "white" }}>
            <li>About</li>
          </Link>
          <Link to="/contact" style={{ color: "white" }}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    );
}

export default sideBar

const sideBarStyle = {
  width: "100%",
  minHeight: "100vh",
  background: "black",
  color: "white",
};

const navStyle = {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  fontSize: "1.4rem",
};