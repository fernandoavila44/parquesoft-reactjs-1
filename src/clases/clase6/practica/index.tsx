const Clase6Practica = () => {
  return (
    <article>
      <h2>Lista de tareas con acciones</h2>
      <ol>
        <li>
          Escribe un reducer con las acciones <code>agregar</code> y{" "}
          <code>borrar</code>. El estado es un arreglo de tareas.
        </li>
        <li>
          El componente solo hace <code>dispatch</code>. No modifica el arreglo
          a mano.
        </li>
        <li>
          Cuando la lista y el formulario estén en componentes distintos,
          compártelos con un provider, como el carrito.
        </li>
      </ol>
    </article>
  );
};

export default Clase6Practica;
