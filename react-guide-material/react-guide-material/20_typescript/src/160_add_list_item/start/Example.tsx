import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

const Example = () => {
    const InitItems: string[] = ["Todo1", "Todo2"];

    const [value, setValue] = useState<string>("");
    const [items, setItems] = useState<string[]>(InitItems);   

  

return (
    <>
    <Form value={value} setValue={setValue} items={items} setItems={setItems} />    
    <Todo items={items} />
    </>
)
  
};

export default Example;

