import React from 'react'
import MovieList from './MovieList'

const Layout = () => {

 
    return (
      <div style={todo}>
      <MovieList/>
        
      </div>
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