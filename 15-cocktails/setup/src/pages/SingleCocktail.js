import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const { loading, obtainCocktailFromResponse, setLoading } = useGlobalContext();
  const [cocktail, setCocktail] = useState({})
  
  const getCocktailData = async () => {
    const res = await fetch(`${url}${id}`);
    const {drinks} = await res.json();
    setCocktail(obtainCocktailFromResponse(drinks[0]));
  }

  useEffect(() => {
    getCocktailData();
    setLoading(false);
  }, [])
  
  return loading? ( <Loading/> ) : (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">Back Home</Link>
      <h2 className="section-title">{cocktail.name}</h2>
      <div className="drink">
        <img src={cocktail.image} alt="cocktail image"/>
        <div className="drink-info">
          {Object.entries(cocktail).map( ([property,value]) => {
            return property!=="image" && (
              <p key={property}><span className="drink-data">{property}: </span>{value}</p>
            )
          })}
          
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
