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

  onSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      value: this.state.input,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos, input: '' })
  }

  render() {
    return (
      <>
        <Form 
        handleChange={this.handleChange} 
        input={this.state.input}
        handleSubmit={this.handleSubmit} />
        <List
        todos={this.state.todos} />
      </>
    );
  }
}


