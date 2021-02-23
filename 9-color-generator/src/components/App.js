import React, { useState, useEffect } from 'react'
import Values from 'values.js'
import Color from './Color'

function App() {
  const [ color, setColor ] = useState("");
  const [ error, setError ] = useState(false);//para prevenir cualquier fruta en el input
  const [ colorsList, setColorList ] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // primero chequeo si el valor ingresado es un coolor, y si es un color hago la agia esa de ostrar la escala
    try{
      let colors = new Values(color).all(20); // esto me genera la escala de colores
      setColorList(colors);
      setError(false);
      console.log(colors[0])
    }catch(e){
      setError(true);
      console.log(e);
    }
  }

  
  return (
    <main>
      <div className="container">
        <h3>Color generator</h3>
        <form>
          <input 
            type="text"
            id="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{background:"whitesmoke"}}
            placeholder="#000000"
            className={error?"error":null}
          />
          <button className="btn" type="submit" onClick={handleSubmit}>Generate</button>
        </form>
      </div>
      <section className="colors">
        {colorsList && colorsList.map( (col,index) => {
          return (
            <Color key={col.rgb} {...col} index={index}/>
          )
        })}
      </section>
    </main>
  )
}

export default App;
