import React, {useEffect} from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktailList, loading } = useGlobalContext();
  
  return loading? ( <Loading/> ) : (cocktailList.length === 0)?
    ( <h2 className="section-title">no cocktails matched your search criteria</h2> ) : (
     <section className="section">
       <h2 className="section-title">Cocktails</h2>
       <div className="cocktails-center">
        
         {cocktailList.map( cocktail => {
           return (
             <Cocktail key={cocktail.id} {...cocktail}/>
           )
         })}
       </div>
     </section>
  )
      
     
}

export default CocktailList
