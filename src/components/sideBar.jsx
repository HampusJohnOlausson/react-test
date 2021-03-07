import React from 'react'
import { Link } from "react-router-dom";

const sideBar = () => {
    return (
      <div>
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

const navStyle = {
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "50%",
  fontSize: "1.4rem",
};