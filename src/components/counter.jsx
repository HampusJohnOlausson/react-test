import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0
     };

     styles = {
        fontWeight: 50,
        fontWeight: 'bold'
     };

    render() { 
        return (
        <div>
            <span style={this.styles} className="badge badge-primary">{this.formatCount()}</span>
            <button>Increment</button>
        </div>
        );
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;