import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      setError(null); // Reinicia el error antes de cada petición
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("Fetched Data:", json);

        setData(json);
        setIsPending(false);
      } catch (error) {
        setError(err.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
};
