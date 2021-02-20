import './App.css';
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  handleIncrement = product => {
    
    this.setState({ count: this.state.count + 1})
  };


  render() {

    return (
      <>
        <h1>{this.formatCount()}</h1>
        <button 
          onClick={ () => this.handleIncrement(product)}>
          Increment</button>
        <ul>
          {this.state.tags.map(tag => ( <li key={tag}>{ tag }</li> ))}
        </ul>
      </>
    )
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 0 : count;
  }
}
