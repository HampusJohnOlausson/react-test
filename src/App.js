
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';


export default class App extends Component {
  

  render() {

    return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    )
  }
}


