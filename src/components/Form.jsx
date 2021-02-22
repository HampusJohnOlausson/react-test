import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        input: ''

    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }

    
    render() {
        return (
            <div className="Form">
                <input
                onChange={(event) => this.handleChange(event)}
                 value={this.state.input}/>    
            </div>
        )
    }
}
