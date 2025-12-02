import React from 'react';
import useFetch from './hooks/useFetch';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostsList: React.FC = () => {

  const { data, loading, error } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h1>Posts de JSONPlaceholder</h1>
      <ul style={{
        listStyleType: 'none'
      }}>
        {data?.map((post) => (
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