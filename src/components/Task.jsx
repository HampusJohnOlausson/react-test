import React, { Component } from 'react'

export default class Task extends Component {
    render() {
        return (
          <div className="Task">
            <span style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none'}}>{this.props.todo.value}</span>
            <button>{this.props.todo.done ? 'undo' : 'complete'}</button>
          </div>
        );
    }
}
