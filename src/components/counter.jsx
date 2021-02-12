import React, { Component } from 'react';

class Counter extends Component {
    
    constructor(){
        super()
        this.state = {
            names: ['erik']
        }
    }

    renderName(){
        this.setState({
            names: ['Johm', 'erik', 'Hanna']
        })

    }

    render() { 
        return (
            <div>
                <h1>{this.state.names}</h1>
                <button onClick={() => this.renderNames()}>Click me</button>
            </div>
          );
    }
}
 
export default Counter;





