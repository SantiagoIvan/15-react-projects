import React from 'react'
import data from '../data'

const FilterButtons = ({categories, menuItemsSetter}) => {

    const filterMenuItemsBy = (category) => {
        !(category.toLowerCase() === "all")? menuItemsSetter(data.filter( item => item.category.toLowerCase() === category)) : menuItemsSetter(data);
    }

    return (
        <div className="btn-container">
            {categories.map( category => {
                return (
                    <button key={category} type="button" className="filter-btn" onClick={() => filterMenuItemsBy(category)}>{category}</button>
                )
            })}
        </div>
    )
}

export default FilterButtons
