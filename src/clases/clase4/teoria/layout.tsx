import useFetch from "./hooks/useFetch";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostsList = () => {
  const { data, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <article>
      <h2>Pedir datos cuando el componente aparece</h2>
      <p>
        <code>useFetch</code> es un hook que esconde el <code>useEffect</code>,
        el estado de carga y el error. La lista solo pinta lo que el hook
        devuelve. Pedimos 5 posts para poder leerlos.
      </p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {data?.map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid #e2e8f0",
              padding: "16px",
              margin: "10px 0",
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PostsList;
