import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (prev, { type, payload }) => {
  switch (type) {
    case 'num_change':
      return { ...prev, [payload.name]: parseInt(payload.value) || 0 };
    case 'add':
      return { ...prev, result: prev.a + prev.b };
    case 'minus':
      return { ...prev, result: prev.a - prev.b };
    case 'divide':
      return { ...prev, result: prev.a / prev.b };
    case 'multiply':
      return { ...prev, result: prev.a * prev.b };
    default:
      throw new Error('Unknown calculation type');
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({
      type: e.target.value
    });
  };

  const numChangeHandler = (e) => {
    dispatch({
      type: 'num_change',
      payload: { name: e.target.name, value: e.target.value }
    });
  }

  return (
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <h3>結果：{state.result}</h3>
    </>
  );
};

export default Example;
