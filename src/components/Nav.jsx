import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
          <div>
            <header style={headerStyle}>
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
            </header>
          </div>
        );
    }
}

const headerStyle = {
  backgroundColor: "green",
  width: "100%",
  height: "10vh",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const navStyle = {
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: '50%',
  fontSize: '1.4rem',
};