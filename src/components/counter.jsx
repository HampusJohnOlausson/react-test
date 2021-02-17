import React, { Component } from 'react';

class Counter extends Component {
    
    constructor(props){
        super(props);

        this.state={
            newItem:'',
            list: []
        }
    }

    render() { 
        return (
            <>
            <h1>Todo List</h1>
            <br/>
            <input type="text"
            placeholder="Enter a todo..."
            value={this.state.newItem}
            onChange={e => this.updateInput('newItem', e.target.value)}
            />
            </>
          );
    }
}
 
export default Counter;





