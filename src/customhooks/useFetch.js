import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (apiUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        if (response.data) {
          setData(response.data);
        } else {
          setError("No data available")
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(apiUrl);
  }, [apiUrl]);

  return [data, error, isLoading];
};
