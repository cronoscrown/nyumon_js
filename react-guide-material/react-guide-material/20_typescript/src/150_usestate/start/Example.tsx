import { useState } from "react";

const Example = () => {

    // string型の状態変数
    const[text, setText] = useState<string>("");

    // User型の配列の状態変数
    type User ={
        name: string;
        age: number;
    }
    const[user, setUser] = useState<User[]>([{ name: "Alice", age: 25 }]);

    // Todo型の配列の状態変数
    type Todo = {
        id: number;
        text: string;
    }
    const[todos,setTodo] = useState<Todo[]>([{idl: 1, text: "Learn TypeScript"}]);

    return (
        <div>
            
        </div>
    );
  
};

export default Example;
