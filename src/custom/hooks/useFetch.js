import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log("returing data:", data);

        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.log("Error occured while fetching the data", err);
          setError(err.message);
          setIsLoading(false);
        }
      })
    }, 500);

    return () => abortController.abort();
  }, [url])
  return { data, isLoading, error };
};

export default useFetch;
