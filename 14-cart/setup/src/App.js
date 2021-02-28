import React from 'react'
import { useBagContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const { loading } = useBagContext();
   if (loading) {
     return (
       <div className='loading'>
         <h1>Loading...</h1>
       </div>
     )
   }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
