import React from 'react'

const Alert = ({type,msg}) => {
    return (
        <div className="alert">
            <p className={type}>{msg}</p>
        </div>
    )
}

export default Alert
