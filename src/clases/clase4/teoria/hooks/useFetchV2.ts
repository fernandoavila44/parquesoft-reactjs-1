import { useEffect, useState } from "react";

export const useFetchV2 = <T>(url: string) => {

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Hubo un error, intente mas tarde')
        }
        const data = await response.json();
        setData(data);

      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false)
      }
    }

    setTimeout(() => {
      fetchData();
    }, 2000);

  }, [])

  return {
    data: data,
    loading: loading,
    error: error
  }
}