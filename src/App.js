import './App.css';
import React, { Component } from 'react'
import Greet from './components/Greet';

export default class App extends Component {

  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = event => {

    this.setState({
      [even]
    })
  }

  render() {

    return (
      <>
        <input type="text" value={this.state.name} onChange={this.handleInput}/>
       </>
      
    );
  }

}
