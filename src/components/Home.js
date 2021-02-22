import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "../custom/hooks/useFetch";
const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
      {error && <div> {error} </div>}
      {isLoading && <div>Loading ... </div>}
    </div>
  );
};

export default Home;
