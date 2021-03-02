import React from 'react'

const Main = () => {
    return (
        <div>
        <h1 style={mainStyle}>Home page</h1>
        </div>
    )
}

export default Main

const mainStyle = {
    height: '90vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}