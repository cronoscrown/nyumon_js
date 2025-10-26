import proptypes from "prop-types";

const AnimalItems = ({ animal }) => {
  return (
            <li key={animal}>
                {animal}
                {animal === "Dog" && "★"}
              </li>
    );
};

AnimalItems.propTypes = {
  animal: proptypes.string.isRequired,
};
export default AnimalItems;