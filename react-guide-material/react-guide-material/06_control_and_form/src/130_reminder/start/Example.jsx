import { useState } from "react";
import Todo from "./components/Todo";
import Addtask from "./components/Addtask";

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

  return (
    <>
    <h2>Reminder</h2>
      <div>
        <Todo todo={todo} setTodo={setTodo}  task={task}/>
      </div>
        <Addtask task={task} todo={todo} setTask={setTask} setTodo={setTodo}/>
    </>
  );
};

export default Example;
