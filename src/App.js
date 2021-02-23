import './App.css';
import React, { Component } from 'react';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import {MovieContext} from './components/MovieContext';


export default class App extends Component {
  

  render() {

    return (
      
      <MovieContext>
      <Nav/>
        <MovieList/>
      </MovieContext>
    );
  }
}


