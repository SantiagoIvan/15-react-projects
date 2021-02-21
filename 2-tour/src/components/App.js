import React, { useState, useEffect } from 'react'
import ToursList from './ToursList'
import Loading from './Loading'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ tours, setTours ] = useState([]);

  const emptyList = () => {
    return (
      <div className="title">
          <h2>No tours left</h2>
          <div className="underline"></div>
          <button type="button" className="btn" onClick={getTours}>Refresh</button>
      </div>
    )
  }
  const removeTour = (id) => {
    setTours(tours.filter( tour => tour.id !== id))
  }
  const getTours = async () => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    }catch(e){
      setIsLoading(false)
      console.log(e)
    }
    
  }
  useEffect(() => {
    getTours()
  }, [])

    
  return (
    <>
      {(isLoading) ? <Loading/> : (tours.length == 0)? emptyList() : <ToursList tours={tours} removeTour={removeTour}/>}
    </>
  );
}

export default App;
