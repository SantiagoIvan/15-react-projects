import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()



const AppProvider = ({ children }) => {
  const [ loading, setLoading ] = useState(true);
  const [ cocktailList, setCocktailList ] = useState([]);
  const [ searched, setSearched ] = useState("");

  const obtainCocktailFromResponse = (drink) => {
    let ingr = "";
    for (let i = 1; i <= 15; i++) {
      if(drink[`strIngredient${i}`]){
        ingr = ingr + drink[`strIngredient${i}`] + " ";
      }else{ break;}
    }
    return { 
      id: drink.idDrink,
      name: drink.strDrink,
      category: drink.strCategory,
      glass: drink.strGlass,
      instructions: drink.strInstructions,
      ingredients: ingr.trim(),
      image: drink.strDrinkThumb
    }
  }
  const getCocktails = async () => {
    const res = await fetch(url+searched);
    const data = await res.json();
    setCocktailList(data.drinks? data.drinks.map( drink => obtainCocktailFromResponse(drink)):[]);
  }
  
  useEffect(() => {
    setLoading(true);
    getCocktails();
    setLoading(false);
  }, [searched])

  return (
    <AppContext.Provider 
      value={{
        loading,
        setLoading,
        cocktailList,
        setCocktailList,
        obtainCocktailFromResponse,
        setSearched
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
