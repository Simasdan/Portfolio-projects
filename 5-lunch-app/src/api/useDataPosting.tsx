import { useState } from 'react';
import axios from 'axios';
import { Endpoint } from './endpoints';

interface PostResult<T> {
  responseData: T | null;
  loading: boolean;
  error: boolean;
  postData: (data: T) => void;
}

function usePost<T>(endpoint: Endpoint): PostResult<T> {
  const [responseData, setResponseData] = useState<T | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const postData = async (data: T) => {
    setLoading(true);
    try {
      const url = `https://lunchapp-backend-production.up.railway.app/${endpoint}`;
      const response = await axios.post<T>(url, data);

      if (response.status === 201) {
        setResponseData(response.data);
      } else {
        setError(true);
      }
    } catch (postError) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { responseData, loading, error, postData };
}

export default usePost;
