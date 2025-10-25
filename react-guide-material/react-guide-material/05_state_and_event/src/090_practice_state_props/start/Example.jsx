import { useState } from "react";
import PropTypes from "prop-types";

const Example = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <p>カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。</p>
     
        <CountResult title="カウント" count={num} />
        <CountUpdate setNum={setNum}/> 
     
    </>

  );
};
const CountResult = ( {title, count} ) => <h3>{title +': '+count}</h3>;

CountResult.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

const CountUpdate = ({setNum}) => {

  const countUp = () => {
    setNum((prevstate) => prevstate + 1);
  };

  const countDown = () => {
    setNum((prevstate) => prevstate - 1);
  };

  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

CountUpdate.propTypes = {
  setNum: PropTypes.func.isRequired,
};

export default Example;
