import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [singleTodo, setSingleTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = allTodos.find((item) => item.id === editId);
      const updatedTodos = allTodos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, singleTodo })
          : { id: t.id, singleTodo: t.singleTodo }
      );
      setAllTodos(updatedTodos);
      setEditId(0);
      setSingleTodo("");
      return;
    }

    if (singleTodo !== "") {
      setAllTodos([...allTodos, { id: `${allTodos.length + 1}`, singleTodo }]);
      setSingleTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodos = allTodos.filter((to) => to.id !== id);
    console.log(delTodos);
    setAllTodos([...delTodos]);
    console.log(allTodos);
  };

  const handleEdit = (id) => {
    const editTodo = allTodos.find((item) => item.id === id);
    console.log(editTodo);
    setSingleTodo(editTodo.singleTodo);
    setEditId(id);
  };

  return (
    <div className="app">
      <div className="container">
        <h3>Todo-list Application</h3>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={singleTodo}
            onChange={(e) => setSingleTodo(e.target.value)}
          />
          <button type="submit"> {editId ? "Edit" : "Add"}</button>
        </form>

        <ul className="todoList">
          {allTodos.map((item) => (
            <li className="singleTodo" key={item?.id}>
              <span className="todoName">{item.singleTodo}</span>
              <button
                onClick={() => {
                  handleEdit(item?.id);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(item?.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
