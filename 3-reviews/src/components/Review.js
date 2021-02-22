import React, {useState} from 'react'
import people from '../data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

const Review = () => {
    const [index, setIndex] = useState(0);
    //porque no voy a renderizar toda la lista, sino que voy a renderizar por item
    //ya que es un slide de reviews
    const {id, name, job, image, text} = people[index]
    //Para este ejercicio nos da un archivo con la data para no repetir lo del fetch data
    // igual si tengo que hacer lo del fetch data, hago useEffect con los corchetes para no hacer el fetch en cada
    // renderizacion, teniendo en cuenta que va a haber una renderizacion en cada cambio de review, y asi me traigo
    // la data de donde sea
    const showItem = (target) => {
        (target==people.length)? setIndex(0) : (target<0)? setIndex(people.length-1) : setIndex(target)
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt="Fotoculo" className="person-img"/>
            </div>
            <span className="quote-icon">
                <FaQuoteRight/>
            </span>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="btn-container">
                <button className="prev-btn" type="button">
                    <FaChevronLeft onClick={() => showItem(index-1)}/>
                </button>
                <button className="next-btn" type="button">
                    <FaChevronRight onClick={() => showItem(index+1)}/>
                </button>
            </div>
            <div className="btn-container">
            <button className="random-btn" type="button" onClick={() => showItem(Math.round(Math.random()*people.length))}>Random Review</button>
            </div>
            
            
        </article>
    )
}

export default Review
