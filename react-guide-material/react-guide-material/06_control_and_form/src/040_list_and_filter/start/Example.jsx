import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [inputText, setInputText] = useState("");
  
  return (
    <>
      <h3>配列のフィルター</h3>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <ul>
        {animals
        .filter(animal => animal.indexOf(inputText) !== -1)
          .map((animal) => (
          <li key = {animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
