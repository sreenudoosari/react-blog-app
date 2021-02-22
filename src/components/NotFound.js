import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page doesn't exist</p>
      <Link to="/">Go to home page ...</Link>
    </div>
  );
};

export default NotFound;
