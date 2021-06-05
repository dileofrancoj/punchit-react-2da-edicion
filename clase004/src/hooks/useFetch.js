import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setData(response);
    } catch (e) {
      console.error(e);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData(url);
  }, []);

  return [data, loading, error];
};
