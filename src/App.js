import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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
    setAllTodos([...delTodos]);
  };

  const handleEdit = (id) => {
    const editTodo = allTodos.find((item) => item.id === id);
    setSingleTodo(editTodo.singleTodo);
    setEditId(id);
  };

  return (
    <div className="app">
      <div className="container">
        <h3>Todo-list Application</h3>
        <TodoForm
          handleSubmit={handleSubmit}
          singleTodo={singleTodo}
          setSingleTodo={setSingleTodo}
          editId={editId}
        />
        <TodoList
          allTodos={allTodos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
