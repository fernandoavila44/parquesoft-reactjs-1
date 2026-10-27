const Clase8Practica = () => {
  return (
    <article>
      <h2>Un padre, un hijo, un cálculo</h2>
      <p>
        No juntes los tres de una vez. Hazlos en este orden y mira el número
        de pintadas o de cálculos.
      </p>
      <ol>
        <li>
          Un padre con un contador y un hijo que recibe un <code>nombre</code>.
          El hijo muestra cuántas veces se pintó. Envuélvelo en{" "}
          <code>memo</code>. El contador no debe mover ese número.
        </li>
        <li>
          Pásale al hijo una función <code>onSaludar</code>. Sin{" "}
          <code>useCallback</code> el hijo se vuelve a pintar. Con{" "}
          <code>useCallback</code>, no.
        </li>
        <li>
          En el padre, calcula <code>nombre.length</code> con{" "}
          <code>useMemo</code> y muestra cuántas veces corrió ese cálculo.
          El contador no debe subirlo. Cambiar el nombre sí.
        </li>
      </ol>
    </article>
  );
};

export default Clase8Practica;
