import { useCallback, useEffect, useState } from "react";
import { fetchApi } from "../utils/productsApi";

export const useFetch = (url, options = {}) => {
  const { immediate = true } = options;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const runFetch = useCallback(
    async (customUrl) => {
      const finalUrl = customUrl ?? url;
      if (!finalUrl || (Array.isArray(finalUrl) && finalUrl.length === 0)) {
        setData([]);
        setIsLoading(false);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        if (Array.isArray(finalUrl)) {
          const results = await Promise.all(finalUrl.map((u) => fetchApi(u)));
          setData(results);
        } else {
          const result = await fetchApi(finalUrl);
          setData(result);
        }
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    if (immediate) runFetch();
  }, [immediate, runFetch]);

  return { data, isLoading, error, refetch: runFetch, setData };
};
