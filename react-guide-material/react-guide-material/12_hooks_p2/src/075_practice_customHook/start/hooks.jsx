import {useState} from 'react';

const useCustomHook = () => {
  const [count, setCount] = useState(0);

  return { count, setCount };
};
export default useCustomHook;