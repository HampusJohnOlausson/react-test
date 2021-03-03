import React from 'react'
import Hooks from './Hooks'

const Main = () => {
    return (
        <div style={mainStyle}>
        <h1 >Home page</h1>
        <Hooks/>
        </div>
    )
}

export default Main

const mainStyle = {
    height: '90vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}