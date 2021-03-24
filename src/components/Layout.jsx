import React from 'react'
import AddMovie from './AddMovie';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList'
import Nav from './Nav';

const Layout = () => {

    return (
      <MovieProvider>
        <div style={todo}>
          <AddMovie/>
          <Nav/>
          <MovieList />
        </div>
      </MovieProvider>
    );
}

export default Layout

const todo = {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'lightblue',
}