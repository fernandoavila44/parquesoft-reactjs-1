import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //Side effects
  useEffect(() => {
    // Función para hacer la petición
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        if (!response.ok) {
          throw new Error('Error al cargar los posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    // Cleanup (opcional): Cancela la petición si el componente se desmonta
    return () => {
      // Ejemplo: Abortar fetch si se usa AbortController
      console.log('Cleanup: Petición completada o cancelada');
    };
  }, []); // Dependencias vacías = solo al montar el componente

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h1>Posts de JSONPlaceholder</h1>
      <ul style={{
        listStyleType: 'none'
      }}>
        {posts.map((post) => (
          <li
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              margin: "10px",
              borderRadius: "8px",
            }}
            key={post.id}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;