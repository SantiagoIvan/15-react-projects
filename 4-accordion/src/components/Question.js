import React, { useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const Question = ({id,title,info}) => {
    const [ expand, setExpand ] = useState(false);
    return (
        <article className="question">
            <div>
                <h3>{title}</h3>
                <p>{expand && info}</p>
                <button className="btn" type="button" onClick={() => setExpand(!expand)}>
                    {(expand)? <AiFillMinusCircle/> : <AiFillPlusCircle/>}
                </button>
            </div>
        </article>
    )
}

export default Question
