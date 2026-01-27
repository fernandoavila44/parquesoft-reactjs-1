import { useState, useEffect } from 'react';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Consultando datos del backend")
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) {
          throw new Error("Error en la consulta al api")
        }
        const data = await response.json();
        console.log(data)
        setData(data);
      } catch (error: unknown) {
        console.log(error)
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    return () => {
      console.log("Se desmonto el componente")
    }
  }, [url]);

  return {
    data: data,
    loading,
    error
  };
};

export default useFetch;