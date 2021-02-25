import React from 'react'

const About = () => {
    return (
      <div>
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