const Todo = ([todo],setTodo,) => {

  const trimTask = () => {
    setTodo(todo.pop(todo.id))
  }

 
  return (
    <ul>
      todo.map({todo}) =
        <li key={todo.id}>
          <button onClick={trimTask}>完了</button>{todo.content}
        </li>
      
    </ul>
  );
};

export default Todo;
