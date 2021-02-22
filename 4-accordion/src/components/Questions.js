import React from 'react'
import data from '../data'
import Question from './Question'

const Questions = () => {
    return (
        <ul>
            {data.map( question => {
                return (
                    <li>
                       <Question key={question.id} {...question}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default Questions
