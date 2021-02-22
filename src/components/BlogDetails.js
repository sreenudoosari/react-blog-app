import { useParams, useHistory } from "react-router-dom";
import useFetch from "../custom/hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  const handleBack = () => {
    history.go(-1);
  };
  return (
    <div className="blog-details">
      {isLoading && <div>Loading ...</div>}
      {error && <div> {error}</div>}
      {!isLoading && !error && blog && (
        <article>
          <h2>{blog.title} </h2>
          <p>Written by {blog.author}</p>
          <div> {blog.body}</div>
        </article>
      )}

      <button className="back-button" onClick={handleBack}>
        Back
      </button>
      {!isLoading && !error && blog && (
        <button onClick={handleClick}>Delete</button>
      )}
    </div>
  );
};

export default BlogDetails;
