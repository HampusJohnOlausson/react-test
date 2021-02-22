import './App.css';
import React, { Component } from 'react'
import Greet from './components/Greet';

export default class App extends Component {

  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], loading: false });
  }

  render() {
    return (
      <>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
          </div>
        )}
      </>
    );
  }

}


