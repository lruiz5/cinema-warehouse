import { useEffect, useState } from "react";

export const useFetch = (api, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();

      setData(json.results);
    }

    fetchData();
  }, [url]);

  return { data };
};
