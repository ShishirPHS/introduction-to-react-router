import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="user">
      <h4>id of post: {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <button onClick={handleShowDetails}>Click to see details</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
