import React from 'react'
import Review from './Review'
import { FaGithubSquare } from 'react-icons/fa'
import reviews from '../data'

function App() {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
            <Review/>
          </div>
        </section>
      </main>
      
    </>
  );
}

export default App;
