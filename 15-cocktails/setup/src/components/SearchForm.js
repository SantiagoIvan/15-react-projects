import React, {useRef,useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearched, setLoading } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, [])

  const handleChange = () => {
    setSearched(searchValue.current.value);
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e)=>{e.preventDefault()}}>
        <div className="form-control">
          <label htmlFor="name">Search your favourite cocktail</label>
          <input id="name" type="text" name="name" ref={searchValue} onChange={handleChange}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
