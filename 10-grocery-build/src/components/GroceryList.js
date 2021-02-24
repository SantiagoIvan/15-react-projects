import React from 'react'

const GroceryList = ({groceryList, editItem, deleteItem, setGroceryList}) => {
    return (
        <div className="grocery-container">
        {groceryList.map( groc => {
          return (
            <div key={Math.random()} className="grocery-item">
              <p className="grocery" >{groc.grocery}</p>
              <button type="button" className="edit-btn" onClick={() => editItem(groc.id)}>Edit</button>
              <button type="button" className="delete-btn" onClick={() => deleteItem(groc.id)}>Delete</button>
            </div>
          )
        })}
        {(groceryList.length>0)?
          <button type="button" className="clear-btn" onClick={() => setGroceryList([])}>Clear Items</button> :
          <></>
        }
      </div>
    )
}

export default GroceryList
