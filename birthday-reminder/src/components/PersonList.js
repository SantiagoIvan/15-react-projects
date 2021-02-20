import React, { useState } from 'react'
import persons from '../persons'
import Person from './Person'

const PersonList = () => {
    const [ personsArray, setPersonsArray ] = useState(persons)
    const handleClick = (id) => {
        setPersonsArray(personsArray.filter(person => id !== person.id))
    }

    return (
        <div>
            { personsArray.map( person => {
                return (
                    <div className="item">
                        <Person key={person.id} {...person}/>
                        <button type="button" className="btn" onClick={() => handleClick(person.id)}>Drop item</button>
                    </div>
                )
            })}
            
            <button type="button" className="btn" onClick={() => setPersonsArray([])}>Clear List</button>
        </div>
    )
}

export default PersonList;
