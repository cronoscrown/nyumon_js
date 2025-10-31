import{useState,useReducer}from"react";

const Example = () => {

  const[count,setCount]=useState(0);
  const[countReducer,dispatch]=useReducer((prev,{type,step})=>{
    switch(type){
      case'+':
        return prev + step;
      case'-':
        return prev - step;
      default:
        throw new Error('不正なactionです');
    }
  }, 0);

  const countUp = () => {
    setCount(prev=>prev + 1);
  }

  return (
    <>
      <h3>{count}</h3>
      <button onClick={countUp}>+</button>
      <h3>{countReducer}</h3>
      <button onClick={()=>dispatch({type:'+',step:1})}>+</button>
      <button onClick={()=>dispatch({type:'-',step:2})}>-</button>
    </>
  );
};

export default Example;
