import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <h3>Todo-list Application</h3>
        <form className="todoForm">
          <input type="text" />
          <button>Add</button>
        </form>
        <ul className="todoList">
          <li className="singleTodo">
            <span className="todoName">Learn React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
