import React, { Component } from 'react'
import Task from './Task'

export default class List extends Component {

    state = {
        todos: [
            { value: 'clean kictchen', done: false},
            { value: 'buy stuff',  done: true}
        ]
    }

    render() {
        return (
            <div className="List">
                {this.state.todos.map((todo, index) => {
                    return (
                        <Task key={index}/>
                    )
                })}
            </div>
        )
    }
}
