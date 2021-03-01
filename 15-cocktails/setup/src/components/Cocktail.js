import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, category, glass, instructions, ingredients, image }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt="cocktail img"/>
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{category}</p>
        <Link className="btn btn-primary btn-details" to={`/cocktail/${id}`}>details</Link>
      </div>
    </article>
  )
}

export default Cocktail
