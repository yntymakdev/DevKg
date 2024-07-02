import { useEffect, useState } from "react";
// const API_URL = 'https://3.34.200.34/jobs';

const useFetch = ({
    API_URL = "https://3.34.200.34/jobs"
}) => {
  const [data, setData] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.success){
        setData(data.data)
      }
    }
    catch (error){
      console.error('Error fetching data:', error);
    }finally{
        setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    data,
  };
}

export default useFetch;