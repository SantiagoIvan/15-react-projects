import React, { useState } from 'react'

const Tour = ({id, name, info, image, price, removeTour}) => {
    const [ readMore, setReadMore] = useState(false); //para el show/hide

    const checkReadMore = () => {
        setReadMore(!readMore);
    }

    return (
        <article className="single-tour">
            <img src={image} alt="image here"/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">$ {price}</h4>
                </div>
                <p>
                    {(readMore)? info : `${info.substring(0,200)} ...` } 
                    <button type="button" className="btn" onClick={checkReadMore}>
                        {(readMore)? "Show less" : "Read more"}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
            </footer>
            <h4>A single Tour</h4>
            
        </article>
    )
}

export default Tour
