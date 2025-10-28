import PropTypes from 'prop-types';

const Todo = ({ todo, setTodo }) => {

  const trimTask = (id) => {
    setTodo(todo.filter(t => t.id !== id))
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {todo.map(t => (
        <li key={t.id}>
          <button onClick={() => trimTask(t.id)}>完了</button>{t.content}
        </li>
      ))}
    </ul>
  );
};

Todo.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      content: PropTypes.node
    })
  ).isRequired,
  setTodo: PropTypes.func.isRequired
};

export default Todo;
