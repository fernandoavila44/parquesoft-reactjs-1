import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

function DetallePost() {
  const [post, setPost] = useState<Post | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // 1. Creamos el controlador para poder abortar la petición
    const controlador = new AbortController();
    const signal = controlador.signal;

    setCargando(true);

    // Pasamos la 'signal' dentro de las opciones del fetch
    fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setCargando(false);
      })
      .catch((error) => {
        // Si la petición fue cancelada a propósito, no manejamos el error como un fallo real
        if (error.name === 'AbortError') {
          console.log('Petición cancelada exitosamente.');
        } else {
          console.error('Error real en la petición:', error);
          setCargando(false);
        }
      });

    // 2. Función de limpieza (Cleanup)
    return () => {
      // Si el componente se desmonta mientras el fetch sigue viajando, ¡lo cancelamos!
      controlador.abort();
    };
  }, []); // Se ejecuta solo al montar el componente

  if (cargando) return <p>Cargando post...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
    </div>
  );
}

export default DetallePost;