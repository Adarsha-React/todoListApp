const TodoList = ({ allTodos, handleEdit, handleDelete }) => {
  return (
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
  );
};

export default TodoList;
