import React, {useState} from "react";

function App() {
  const [list, setList] = useState("");
  const [newList, setNewList] = useState([]);
  
  function handleArray(event) {
    const newValue = event.target.value;
    setList(newValue);
  }

  function handleAdd() {
    setNewList( (prevItems) => {
      return [...prevItems, list];
    });
    setList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={list} onChange={handleArray}/>
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newList.map(x => <li>{x}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
