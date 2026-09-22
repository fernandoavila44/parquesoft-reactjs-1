const Clase4Practica = () => {
  return (
    <article>
      <h2>Usuarios con carga y error</h2>
      <ol>
        <li>
          Pide <code>https://jsonplaceholder.typicode.com/users?_limit=3</code>{" "}
          dentro de un <code>useEffect</code>.
        </li>
        <li>Muestra tres estados: cargando, error y la lista de nombres.</li>
        <li>
          Al desmontar el componente, cancela la petición con{" "}
          <code>AbortController</code>.
        </li>
      </ol>
    </article>
  );
};

export default Clase4Practica;
