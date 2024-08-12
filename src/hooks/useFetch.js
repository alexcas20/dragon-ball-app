import { useState, useEffect } from "react";

export const useFetch = async (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  

  useEffect(() => {
    const fetchData = async () => {
    setIsPending(true);
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    setIsPending(false);
    setData(json.items);
     console.log(json.items);
  };
    fetchData();
  }, [url]);

  return { data, isPending };
};
