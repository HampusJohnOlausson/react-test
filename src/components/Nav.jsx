import React, { Component } from 'react'
import SideBar from './SideBar'

export default class Nav extends Component {

  constructor(props){
    super(props)

    this.state = {
      isSidebarOpen: false
    }
  }

  handleClick = () => {
   this.setState({ isSidebarOpen: true})
  }


  
    render() {
        return (
          <div>
            <header style={headerStyle}>
              <h2>
                <i onClick={this.handleClick} style={{cursor: 'pointer'}} className="fas fa-bars"></i>
              </h2>
            </header>
            <SideBar isOpen={this.state.isSidebarOpen}/>
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
