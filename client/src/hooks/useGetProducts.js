import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get(`${API_URL}/products`);
        setProducts(result.data);
      } catch {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return [{ products, isLoading, isError }];
};

export default useGetProducts;
