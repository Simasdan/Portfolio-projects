import { useState, useEffect } from 'react';
import axios from 'axios';
import { Endpoint } from './endpoints';

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: boolean;
}

function useFetch<T>(endpoint: Endpoint, id?: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `http://localhost:3002/${endpoint}${id ? `/${id}` : ''}`;
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (fetchError) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}

export default useFetch;

// USECASE

// FISTLY:

// Install axios and JSON Server:
// npm install axios
// npm install json-server

// Run JSON Server:
// npm run server.

//  INITIAL SETUP INSIDE YOUR COMPONENT:

// Copy and adjust to your component. This example applies to the "user" endpoint,
// but you can replace it with any other valid endpoint from the Endpoint enum.

// Import the useFetch hook and the UserData interface:

// import useFetch, { Endpoint } from '../../api/useDataFetching';
// import { UserData } from '../../api/apiModel';

// FURTHER COMPONENT SETUP:

// function YourComponent() {
//   const { data, loading, error } = useFetch<UserData>(Endpoint.USER);

//   if (loading) return <h1>LOADING...</h1>;

//   if (error) return <h1>Error fetching data</h1>;

//   if (!data) return null;

// ACCESS PROPERTIES LIKE:
// <div>{data.name}</div>
// <div>{data.surname}</div>
// <div>{data.balance}</div>
// ...

//   return (
//     <div>
//       {/* Render your component using the fetched data */}
//     </div>
//   );
// }
