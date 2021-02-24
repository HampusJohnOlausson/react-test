import React from 'react'
import { Route } from 'react-router'
import About from './About'
import Shop from './Shop'

const Nav = () => {
    return (
        <header style={headerStyle}>
            <ul>
                <Route path="/About" component={About}/>
                <Route path="/Shop" component={Shop}/>
            </ul>
        </header>
    )
}

export default Nav

const headerStyle = {
    background: 'grey',
    height: '10vh',
    width: '100%',
    color: 'white',
}