import './App.css';
import React, { Component } from 'react'
import TodoForm from './components/TodoForm';

export default class App extends Component {

  state = {
    todos: []
  };

  addTodo = (todo) => {

  }

  render() {
    return (
      <>
       <TodoForm/>
      </>
    );
  }

}


