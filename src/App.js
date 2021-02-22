import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';


export default class App extends Component {
  state = {
    input: "",
    todos: [
      { value: "clean kictchen", done: false },
      { value: "buy stuff", done: true },
    ],
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <>
        <Form handleChange={this.handleChange} input={this.state.input} />
        <List
        todos={this.state.todos} />
      </>
    );
  }
}


