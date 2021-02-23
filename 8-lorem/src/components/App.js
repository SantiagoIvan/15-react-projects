import React, { useState, useEffect } from 'react'
import data from '../data'
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [val,setVal] = useState(0);
  const [res,setRes] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setRes(data.slice(0,(val>data.length)? data.length : val))
  }
  return (
    <main>
      <h3>Tired of boring lorem ipsum?</h3>
      <section className="section-center">
        <form className="lorem-form">
          <label htmlFor="quantity">Paragraph: </label>
          <input 
            type="number"
            id="quantity"
            name="quantity"
            value={val}
            onChange={(e)=>setVal(e.target.value)}
          />
          <button className="btn" onClick={handleSubmit}>Generate</button>
        </form>
        {res.map( r => {
          return (
            <p key={Math.random()}>{r}</p>
          )
        })}
      </section>

    </main>
  );
}

export default App;
