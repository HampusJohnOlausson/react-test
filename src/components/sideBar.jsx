import React from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {


    if(!this.props.isOpen) return null;

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
};

export default SideBar;

const sideBarStyle = {
  width: "100%",
  minHeight: "100vh",
  background: "black",
  color: "white",
  left: '-100%',
};

const navStyle = {
  minHeight: '85vh',
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  fontSize: "1.4rem",
};
