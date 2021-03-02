import React from 'react'
import ReactDOM from 'react-dom'

const Portal = () => {
    return ReactDOM.createPortal(
      <h1 style={{ color: "grey" }}>Portal demo</h1>,
      document.getElementById("portal-root")
    );
    
}

export default Portal
