import axios from 'axios';
import { useState } from 'react';

const API_URL = 'http://localhost:8080';

const useAuth = () => {
  const localStorageData = localStorage.getItem('user');
  const [data, setData] = useState(localStorageData ? JSON.parse(localStorageData) : null );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const authenticate = async (credentials) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios.post(`${API_URL}/login`, credentials);
      setData(result.data);

      if (result.data) {
        localStorage.setItem('user', JSON.stringify(result.data));
      }
    } catch {
      setIsError(true);
    }

    setIsLoading(false);
  };

  const signOut = () => {
    localStorage.removeItem('user');
    setData(null);
  };
  return [{ data, isLoading, isError, signOut }, authenticate];
};

export default useAuth;
