import { useState } from "react";
const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [numbers, setNumbers] = useState(numArray);
  
  const numshuffle = () =>{
    const newNumbers = [...numbers];
    const lastNum = newNumbers.pop();
    newNumbers.unshift(lastNum);
    setNumbers(newNumbers);
  };
  return (
    <>
      <div>
        <h1>{numbers}</h1>
        <button onClick={numshuffle}>shuffle</button>
      </div>
      
    </>
  );
};

export default Example;
