import { useEffect, useState } from "react";

const useFetch = ({ url = "http://3.38.98.134/jobs" }: { url: string }) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // aa
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if ((data.statusCode = 200)) {
        setData(data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    data,
  };
};

export default useFetch;
