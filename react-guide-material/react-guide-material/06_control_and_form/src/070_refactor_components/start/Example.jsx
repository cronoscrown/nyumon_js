import { useState } from "react";
import AnimalList from "./components/AnimalList";
import InputAnimal from "./components/InputAnimal";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  const filterdAnimals = animals.filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            return isMatch;
          })

  return (
    <>
      <InputAnimal filterState={[filterVal, setFilterVal]}/>
      <AnimalList animals={filterdAnimals}/>
    </>
  );
};

export default Example;
