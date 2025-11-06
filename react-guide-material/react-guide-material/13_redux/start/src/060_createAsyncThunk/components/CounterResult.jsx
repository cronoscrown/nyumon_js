import { useSelector } from "react-redux"
const CounterResult = () => {
  const count = useSelector(state => state.counter.count);
  const status = useSelector(state => state.counter.status);
  
  return (
    <div>
      <h3>カウント: {count}</h3>
      <p>ステータス: {status}</p>
    </div>
  );
};

export default CounterResult;