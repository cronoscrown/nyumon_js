import { useState } from "react";
import Todo from "./Todo";

const Example = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([ {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
    ]);

  const inputTask = (e) => {
    setTask(e.target.value);
  }

  
  const addTask = () => (
    setTodo([...todo, { id: todo.length + 1, content: task }])
  )

  
   

  return (
    <>
      <h3>完成系と同じような機能を作成してください。</h3>
      <p>また、枠線で囲まれた部品をコンポーネントに分離してください。</p>
      <div>
        <Todo todo={[todo]} setTodo={setTodo}  task={task}/>
      </div>
        <input type="text"  value={task} onChange={inputTask} />
        <button onClick={addTask}>追加</button>
    </>
  );
};

export default Example;
