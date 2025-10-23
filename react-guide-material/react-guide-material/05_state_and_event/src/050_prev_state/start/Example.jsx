import { useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount(count + 1);
        }
    const countDown = () => {
        setCount(count - 1);
        }

  return (
    <>
      <p>ボタンを{count}回押しました!</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
    );
};

export default Example;
