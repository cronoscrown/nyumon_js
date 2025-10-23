import "./Container.css";
import PropTypes from "prop-types";

const Container = ({ title, children, first, second, color}) => {
  return (
    <div className={`container ${color}`}>
      <h3>{title}</h3>
      <div>{children}</div>
      <div>{first}</div>
      <div>{second}</div>
    </div>
  )
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  first: PropTypes.any,
  second: PropTypes.any,
  color: PropTypes.string
};

export default Container;
