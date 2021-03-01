import React from 'react'
import ReactDOM from 'react-dom'

const Portal = () => {
    return ReactDOM.createPortal(
        <div>
            <h1>Portal demo</h1>
        </div>,
        document.getElementById('portal-root')
    )
}

export default Portal
