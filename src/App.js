import './App.css';
import React, { Component } from 'react'
import Greet from './components/Greet';

export default class App extends Component {

  state = {

  };


  render() {


    return (
      <>
      <Greet name="Bruce"/>
      <Greet name="Diana"/>
      </>
    )
  }

}
