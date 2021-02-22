import React, { useState, useEffect } from 'react'
import Jobs from './Jobs'
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const getInfo = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error)
    }
  }

  useEffect(() => {
    getInfo();
  }, [])
  
  return (
    <main>
      {(isLoading)? <section> <h2 className="loading">Loading...</h2></section> : 
                    (<>
                    <section className="title">
                      <h2>Expierence</h2>
                      <div className="underline"/>
                    </section>
                    <Jobs jobs={jobs}/>
                    </>)}
    </main>
  );
}

export default App;
