import { createContext,useContext,useReducer } from "react";
import PropTypes from 'prop-types';

const CalcContext = createContext();
const CalcDispatch = createContext();

const CalcProvider = ({ children }) => {
    
const initState = {
    a: 1,
    b: 2,
    result: 3,
   
  };

    const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: parseInt(value) || 0 };
    }
    case "add": {
      return { ...state, result: parseInt(state.a) + parseInt(state.b) };
    }
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};


  const [state, dispatch] = useReducer(reducer, initState);

    return (
        <CalcDispatch.Provider value={dispatch}>
            <CalcContext.Provider value={state }>
                {children}
            </CalcContext.Provider>
        </CalcDispatch.Provider>
    );
}
const useCalc = () => useContext(CalcContext);
const useCalcDispatch = () => useContext(CalcDispatch);

CalcProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { CalcProvider, useCalc, useCalcDispatch };
