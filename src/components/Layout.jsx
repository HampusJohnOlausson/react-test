import React from 'react'
import Input from './Input'
import Todos from './Todos'

const Layout = () => {

    return (
      <div style={todo}>
        <h2>Todo list</h2>
        <Input/>
        <Todos/>
      </div>
    );
}

export default Layout

const todo = {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'lightblue',
}