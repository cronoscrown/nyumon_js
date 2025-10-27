import PropTypes from 'prop-types';

const Addtask = ({task, todo,setTask,setTodo}) => {
  const inputTask = (e) => {
    setTask(e.target.value);
  }

  
  const addTask = () => {
   return setTodo([...todo, { id: todo.length + 1, content: task }])
  }

  return (
      <>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTask();
        setTask("");
      }}>
         <input type="text"  value={task} onChange={inputTask} />
          <button>追加</button>
      </form>
       
        </>
    );
};

Addtask.propTypes = {
  task: PropTypes.string.isRequired,
  todo: PropTypes.array.isRequired,
  setTask: PropTypes.func.isRequired,
  setTodo: PropTypes.func.isRequired,
};

export default Addtask;