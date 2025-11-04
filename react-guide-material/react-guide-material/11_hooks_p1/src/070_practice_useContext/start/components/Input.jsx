
import { useCalc, useCalcDispatch } from "../context/calcProvider";
import PropTypes from 'prop-types';



const Input = ({name}) => {
    const state = useCalc();
    const dispatch = useCalcDispatch();

 

    const changeHandler = (e) => {
        dispatch({type: 'change', payload: {name, value: e.target.value}});
    };

    return (
        <div>
            {name}:
            <input
                type="number"
                name={name}
                value={state[name]}
                onChange={changeHandler}
            />
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired
};

export default Input;

