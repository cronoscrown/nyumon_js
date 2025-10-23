import { useState } from "react";

const Example = () => {
  const [person, setPerson] = useState({ name: "Tom", age: 18 });

  const setName = (e) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const setAge = (e) => {
      setPerson({
        ...person,
        age: e.target.value,
      });
    }

  const reset = () => {
    setPerson({ name: "", age: null });
  }
  

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <input type="text" value={person.name} onChange={setName}/>
      <input type="number" value={person.age} onChange={setAge}/>
      <br />
      <button onClick={reset}>リセット</button>
      
    </>
  );
};

export default Example;
