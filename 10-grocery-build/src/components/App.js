import React, { useState, useEffect } from 'react'
import GroceryList from './GroceryList'
import Alert from './Alert'

function App() {
  const [grocery, setGrocery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [groceryList, setGroceryList] = useState([]);
  const [alert, setAlert] = useState({show:false,type:"",msg:""});
  const [idEdited, setIdEdited] = useState("");
  
  const buscar_elemento = (id) => {
    for(let i=0;i<groceryList.length;i++){
      if(groceryList[i].id === id){
        return i;
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isEditing){
      const arr = groceryList
      arr[buscar_elemento(idEdited)].grocery = grocery;
      setGroceryList(arr);
      setIsEditing(false);
    }else{
      setGroceryList([...groceryList, {id:new Date().toLocaleString(), grocery}]);
    }
    setAlert({type:"alert-success",msg:`${(isEditing)?"Edited!":"Added!"}`});
  }

  useEffect( () => {
    const timeout = setTimeout(() => {setAlert({show:false})},2000);
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])
  
  const editItem = (id) => {
    setIdEdited(id)
    setIsEditing(true);
  }

  const deleteItem = (id) => {
    const arr = groceryList.filter( elem => elem.id !== id)
    setGroceryList(arr);
    setAlert({type:"alert-danger",msg:`Deleted`});
  }
  return (
    <section className="section-center">

      <form className="grocery-form" onSubmit={handleSubmit}>
        <header>
          {alert.show && <Alert {...alert}/>}
        </header>
        <h3>Grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            id="grocery"
            name="grocery"
            value={grocery}
            onChange={(e) => setGrocery(e.target.value)}
            placeholder="e.g eggs"
          />
          <button type="submit" className="submit-btn">{(isEditing)?"Edit" : "Submit"}</button>
        </div>
      </form>
      <GroceryList 
        groceryList={groceryList}
        editItem={editItem}
        deleteItem={deleteItem}
        setGroceryList={setGroceryList}
      />

    </section>
  );
}

export default App;
