/*
import axios from 'axios';
import { useEffect, useState } from 'react';
/*
export const fetchData = async () => {
  const { data } = await axios.get('/api/data'); // Replace with your API endpoint
  return data;
};

const { data, isLoading, isError } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
    staleTime: 5000, // Data is considered fresh for 5 seconds
    cacheTime: 10000, // Data remains in the cache for 10 seconds
    retry: 3, 
  });

function useQuery(arg0: {
  queryKey: string[]; queryFn: () => Promise<any>; staleTime: number; 
  cacheTime: number; 
  retry: number;
}): { data: any; isLoading: any; isError: any; } {
  throw new Error("Function not implemented.");
}
*/
/*
// Custom hook for fetching data with optional query parameters
const useFetchData = <T,>(url: string, queryParams?: Record<string, string>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .post(url, {
        params: queryParams, // query parameters to the request
      })
      .then((response) => {
        setData(response.data); // Store the fetched data
      })
      .catch((err) => {
        setError('Failed to fetch data');
        console.error(err);
      });
  }, [url, queryParams]); // Dependencies on both `url` and `queryParams`

  return { data, error };
};

export default useFetchData;*/