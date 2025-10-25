import { useState } from "react";
import PropTypes from "prop-types";

const Example = () => {
  const [ toggle, setToggle ] = useState(true);
  const toggleComponent = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
    <button onClick={toggleComponent}>toggle</button>
    {toggle ? 
      <Count 
        key="A" title="A"
      /> : 
      <Count
        key="B" title="B"
      />
    }
    </>
  );
};

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

Count.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Example;
