import PropTypes from "prop-types";
import "./User.css";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email } = user;
  

  return (
    <div className="user">
      <h2>{name}</h2>
      <p>{email}</p>
      <Link to={`/user/${id}`}>See Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
