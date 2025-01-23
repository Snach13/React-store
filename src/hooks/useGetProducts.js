import { useState, useEffect } from "react";
import axios from "axios";

function useGetProducts(urlAPI) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const source = axios.CancelToken.source(); // Create a cancellation token

    async function fetchData() {
      setLoading(true); // Set loading to true before fetching
      setError(null); // Reset error state before fetching
      try {
        const response = await axios.get(urlAPI, { cancelToken: source.token });
        setProducts(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          setError("Failed to fetch products.");
        }
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    }

    fetchData();

    return () => source.cancel("Component unmounted, request canceled."); // Cleanup
  }, [urlAPI]);

  return { products, loading, error }; // Return all states
}

export { useGetProducts };
