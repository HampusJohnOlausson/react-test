import React, { Component } from 'react'

export default class Form extends Component {

    
    render() {
        return (
          <div className="Form">
            <form onSubmit={this.props.onSubmit}>
              <input
                onChange={(event) => this.props.handleChange(event)}
                value={this.props.input}
              />
            </form>
          </div>
        );
    }
}
