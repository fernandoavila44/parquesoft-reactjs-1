const Clase8Practica = () => {
  return (
    <article>
      <h2>Medir un render de más</h2>
      <p>Parte de la lista de usuarios de la clase 3.</p>
      <ol>
        <li>
          Agrega un botón que cambie un número del padre y no toque la lista.
        </li>
        <li>
          Muestra en cada tarjeta cuántas veces se pintó. Envuélvela en{" "}
          <code>memo</code>.
        </li>
        <li>
          Pasa el <code>onClick</code> con <code>useCallback</code>. Si la
          función es nueva en cada render, <code>memo</code> no puede saltarse
          la tarjeta.
        </li>
      </ol>
    </article>
  );
};

export default Clase8Practica;
