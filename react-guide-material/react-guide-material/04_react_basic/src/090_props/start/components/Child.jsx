/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";
import PropTypes from 'prop-types';

const Child = ({color = 'blue',num=0, obj={ name:'', age:0 }}) => {
  return (
    <div className={`component ${color}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{obj.name + obj.age}</h3>
    </div>
  );
};

Child.propTypes = {
  color: PropTypes.string,
  num: PropTypes.number,
  obj: PropTypes.object,
};

export default Child;
