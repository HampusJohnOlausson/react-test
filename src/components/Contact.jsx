import React from 'react'
import PersonInput from './PersonInput'
import PersonList from './PersonList'
import Portal from './Portal'

const Contact = () => {
    return (
        <div style={contactStyle}>
            <h1>Contact page</h1>
            <Portal/>
            <PersonInput/>
            <PersonList/>
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