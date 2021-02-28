import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading:true,
  cart: [],
  total:0,
  amount:0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({type:"CLEAR_CART"})
  }
  const removeItem = (id) => {
    dispatch({type:"REMOVE_ITEM", payload:{id}})
  }
  const modifyQuantity = (id,q) => {
    dispatch({type:"MODIFY_QUANTITY", payload:{id,q}})
  }
  const getCart = async () => {
    dispatch({type:"LOADING"})
    const data = await fetch(url);
    const jsonData = await data.json()
    dispatch({type:"DISPLAY_DATA",payload:{data:jsonData}})
    
  }

  useEffect(() => {
    dispatch({type: "UPDATE_TOTAL"})
    
  }, [state.cart])

  useEffect(() => {
    getCart();
  }, [])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        modifyQuantity
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useBagContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
