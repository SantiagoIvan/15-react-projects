import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label for="name">Search your favourite cocktail</label>
          <input id="name" type="text" name="name"/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
