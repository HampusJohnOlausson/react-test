import React from 'react'
import { Link } from 'react-router-dom'

import App from '../App'
import About from './About'
import Shop from './Shop'

const Nav = () => {
    return (
      <header style={headerStyle}>
        <li>
          <Link to="/about">About</Link>
        </li>
      </header>
    );
}

export default Nav

const headerStyle = {
    background: 'grey',
    height: '10vh',
    width: '100%',
    color: 'white',
}