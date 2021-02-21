import './App.css';
import React, { Component } from 'react'
import Greet from './components/Greet';

export default class App extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    nameError: '',
    emailError: '',
    passwordError: ''
  };

  handleChange = event => {

    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
      ? event.target.checked
      : event.target.value
    });
  }


  validate = () => {

    let nameError = '';
    let emailError = '';
    let passwordError = '';

    if(!this.state.email.includes('@')){
      emailError = 'invalid email';
    }

    if(emailError){
      this.setState({ emailError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if(isValid) {
    console.log(this.state)
    }

    
  }

  render() {

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}/>
            <div style={{color: 'red'}}>
              {this.state.nameError}</div>
          </div>
          <div>
          <input name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}/>
            <div style={{color: 'red'}}>
              {this.state.emailError}</div>
          </div>
          <div>
          <input type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}/>
            <div style={{color: 'red'}}>
              {this.state.passwordError}</div>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
       </>
      
    );
  }

}
