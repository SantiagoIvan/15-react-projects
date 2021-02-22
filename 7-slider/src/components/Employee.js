import React from 'react'


const Employee = ({image, name, title, quote, className}) => {
    
    return (
        <article className={className}>
            <img className="person-img" src={image} alt={name}/>
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <blockquote className="text">{quote}</blockquote>
        </article>
    )
}

export default Employee
