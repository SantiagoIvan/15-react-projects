import React, { useState, useEffect } from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import Reviews from './Reviews'

function App() {
  return (
    <main>
      <div className="title">
        <h2><span>/</span> Reviews</h2>
      </div>
      <section className="section-center">
        <Reviews/>
      </section>
    </main>
  );
}

export default App;
