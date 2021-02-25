import React from 'react'
import {  BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Main from './Main'
import Nav from './Nav'

const Layout = () => {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/contact/:id"/>
        </Switch>
      </BrowserRouter>
    );
}

export default Layout
