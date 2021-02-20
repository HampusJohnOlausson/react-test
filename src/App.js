import './App.css';
import React, { Component } from 'react'


export default class App extends Component {

  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  handlePress = () => {
    this.setState({ count: this.state.count + 1});
  }


  render() {


    return (
      <>
      <ul>
        {this.state.tags.map(tag => 
          <li key={tag}>{tag}</li>
        )}
      </ul>
        <h1>{this.state.count}</h1>
        <button onClick={this.handlePress}  >Click</button>
      </>
    )
  }

}
