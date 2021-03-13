import React, { Component } from 'react'
import Layout from './components/Layout'
import { MovieProvider } from './components/MovieListContext'


export default class App extends Component {
  render() {
    return (
      <MovieProvider>
        <Layout/>
      </MovieProvider>
    )
  }
}



