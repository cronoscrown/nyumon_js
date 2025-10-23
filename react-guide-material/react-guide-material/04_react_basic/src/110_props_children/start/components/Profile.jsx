import "./Profile.css";
import PropTypes from "prop-types";

const Profile = ({ name, age, country, color }) => {
  return (
    <div className={`profile ${color}`}>
      <h3>Name: {name}</h3>
      <p>Age: {age} </p>
      <p>From: {country}</p>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};



export default Profile;
