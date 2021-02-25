import React from 'react'
import Main from './Main'
import Nav from './Nav'

const Contact = () => {
    return (
      <div>
        <main style={mainStyle}>
          <h1>Hello</h1>
        </main>
      </div>
    );
}

export default Contact

const mainStyle={
    background: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
}