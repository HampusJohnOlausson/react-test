import React from 'react'
import Portal from './Portal'

const About = () => {
    return (
      <div>
        <main style={rootStyle}>
          <h1>About</h1>
          <Portal/>
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