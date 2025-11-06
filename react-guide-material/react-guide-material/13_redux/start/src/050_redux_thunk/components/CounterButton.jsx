import { useDispatch } from "react-redux";


const CounterButton = ({calcType, step, actionCreater}) => {
    
    const dispatch = useDispatch();
    const clickHandler = () => {
        // const action = calcType === '+' ? add(step) : minus(step);
        dispatch(actionCreater(step));
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;