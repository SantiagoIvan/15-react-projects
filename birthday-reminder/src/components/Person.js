import React from 'react'

const Person = ({id, name, age, profession, img}) => {
    return (
        <div className="person">
            <p>{id}</p>
            <h4>{name}</h4>
            <h6>{age}</h6>
            <p>{profession}</p>
            <img src={img} alt="react img" className="img-person"></img>
        </div>
    )
}

export default Person
