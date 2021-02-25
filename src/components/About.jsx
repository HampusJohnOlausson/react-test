import React from 'react'
import Nav from './Nav'

const About = () => {
    return (
      <div>
        <Nav />
        <main style={rootStyle}>
          <h1>About</h1>
        </main>
      </div>
    );
}

export default About


const rootStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    background: 'yellow',
}