import React from 'react'
import Portal from './Portal'

const Contact = () => {
    return (
        <div style={contactStyle}>
            <h1>Contact page</h1>
            <Portal/>
        </div>
    )
}

export default Contact

const contactStyle = {
  height: "90vh",
  width: "100%",
  display: "flex",
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center",
};