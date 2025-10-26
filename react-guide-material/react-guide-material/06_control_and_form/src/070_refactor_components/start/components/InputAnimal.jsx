import proptypes from "prop-types";

const InputAnimal = ({filterState}) => {
    const [filterVal, setFilterVal] = filterState;
  return (
            <input
            type="text"
            value={filterVal}
            onChange={(e) => setFilterVal(e.target.value)}
            />
            );
};

InputAnimal.propTypes = {
    filterState: proptypes.arrayOf(proptypes.any).isRequired,
};
export default InputAnimal;