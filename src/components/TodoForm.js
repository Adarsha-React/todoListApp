const TodoForm = (props) => {
  const { handleSubmit, singleTodo, setSingleTodo, editId } = props;
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={singleTodo}
        onChange={(e) => setSingleTodo(e.target.value)}
      />
      <button type="submit"> {editId ? "Edit" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
