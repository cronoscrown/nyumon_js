import { useState } from "react";
const Example = () => {
   
    const [ a, setVala ] = useState(0);
    const [ b, setValb ] = useState(0);
    const [ c, setValc ] = useState(0);
    const handleA = () => {
      setVala(a + 1);
    };
    const handleB = () => {
      setValb(b + 1);
    };
    const handleC = () => {
      setValc(c + 1);
    };  
  return(
    <>
    <p>ボタンAを{a}回押しました!</p>
    <button onClick={handleA}>ボタンA</button>
    <p>ボタンBを{b}回押しました!</p>
    <button onClick={handleB}>ボタンB</button>
    <p>ボタンCを{c}回押しました!</p>
    <button onClick={handleC}>ボタンC</button>
    </>
    
  )
};

export default Example;

// 以下まとめて扱う場合

/* import { useState } from "react";

export default function Example() {
  const [values, setValues] = useState({ a: 0, b: 0, c: 0 });

  const handleClick = (key) => {
    setValues((prev) => ({
      ...prev,        // 既存の値をコピー（これが超重要！）
      [key]: prev[key] + 1, // 押したボタンの値だけ更新
    }));
  };

  return (
    <>
      <p>ボタンAを{values.a}回押しました！</p>
      <button onClick={() => handleClick("a")}>A</button>

      <p>ボタンBを{values.b}回押しました！</p>
      <button onClick={() => handleClick("b")}>B</button>

      <p>ボタンCを{values.c}回押しました！</p>
      <button onClick={() => handleClick("c")}>C</button>
    </>
  );
}

 */