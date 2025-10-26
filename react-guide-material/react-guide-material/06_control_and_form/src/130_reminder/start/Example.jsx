import Todo from "./Todo";
import { useState } from "react";
const Example = () => {
  const [task, setTask] = useState(defaultTasks);
  return (
    <>
      <h3>完成系と同じような機能を作成してください。</h3>
      <p>また、枠線で囲まれた部品をコンポーネントに分離してください。</p>
      <div>
        <Todo task={task} setTask={setTask}  defaultTasks={defaultTasks}/>
      </div>
        <input type="text"  />
        <button>追加</button>
    </>
  );
};

export default Example;
