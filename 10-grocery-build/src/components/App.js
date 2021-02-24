import React, { useState, useEffect } from 'react'
import GroceryList from './GroceryList'
import Alert from './Alert'

const getLocalStorage = () => {
  let arr = localStorage.getItem("lista de groserias");
  return arr && JSON.parse(arr)
}

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

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show,type,msg})
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
    setGrocery("");
    showAlert(true, "alert-success", `${(isEditing)?"Edited!":"Added!"}`);
  }

  useEffect( () => {
    setGroceryList(getLocalStorage())
  }, []);

  useEffect( () => {
    const timeout = setTimeout( () => showAlert() ,2000);
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])
  
  useEffect( () => {
    localStorage.setItem("lista de groserias", JSON.stringify(groceryList));
  }, [groceryList]);

  const editItem = (id) => {
    setIdEdited(id)
    setIsEditing(true);
  }

  const deleteItem = (id) => {
    const arr = groceryList.filter( elem => elem.id !== id)
    setGroceryList(arr);
    showAlert(true, "alert-danger", `Deleted`);
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
        showAlert={showAlert}
      />

    </section>
  );
}

export default App;
