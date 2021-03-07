import React, { Component } from 'react'


export default class Nav extends Component {
    render() {
        return (
          <div>
            <header style={headerStyle}>
              <h2>
                <i style={{cursor: 'pointer'}} class="fas fa-bars"></i>
              </h2>
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
