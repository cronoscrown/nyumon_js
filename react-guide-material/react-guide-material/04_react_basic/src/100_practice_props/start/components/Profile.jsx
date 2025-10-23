import "./Profile.css";
import PropTypes from "prop-types";

const Profile = ({ name, age, country }) => {
  return (
    <div className="profile">
      <h3>{'Name:'+name}</h3>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
};


Profile.defaultProps = {
  name: "John Doe",
  age: '??',
  country: "Japan",
};

Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  country: PropTypes.string,
};

export default Profile;
