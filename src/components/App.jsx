import React, { useState } from "react";

function App() {
  const [InputText, setInputText] = useState("");
  const [ToDoList, setToDoList] = useState([]);
  function handleChange(event) {
    const newvalue = event.target.value;
    setInputText(newvalue);
  }
  function addTodo() {
    setToDoList((prevItems) => {
      return [...prevItems, InputText];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={InputText} onChange={handleChange} />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {ToDoList.map((itemslist) => {
            return <li>{itemslist}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
