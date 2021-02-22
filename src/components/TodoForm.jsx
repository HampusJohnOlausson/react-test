import React, { Component } from 'react'

export default class TodoForm extends Component {

    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="todo..."
              />
            </form>
          </div>
        );
    }
}
