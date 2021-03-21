import React, {useState} from 'react'
import Input from './Input'


const Layout = () => {

    return (
      <div style={todo}>
        <h2>Todo list</h2>
        <Input />
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