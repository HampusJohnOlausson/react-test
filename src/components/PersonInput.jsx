import axios from 'axios'
import React, { Component } from 'react'

export default class PersonInput extends Component {

    state = {
        name: '',
    }

    handleChange = event => {
        this.setState({ name: event.target.value  })
    }

    handleSubmit = event => {
     
        event.preventDefault();

        const user = {
            name: this.state.name
        }

        axios.post("https://jsonplaceholder.typicode.com/users", { user })
        .then(res => {
            console.log(res.data)
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}