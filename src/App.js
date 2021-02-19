import './App.css';
import React, {useState} from 'react'; 
import MovieList from './components/MovieList';
import Nav from './components/Nav'
import {MovieProvider} from './components/MovieContext'

function App() {

  return (
    <MovieProvider>
    <div>
      <MovieList/>
      <Nav/>
    </div>
    </MovieProvider>
  );
}

export default App;