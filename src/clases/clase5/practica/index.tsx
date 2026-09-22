const Clase5Practica = () => {
  return (
    <article>
      <h2>Idioma en tres niveles</h2>
      <ol>
        <li>
          Guarda un idioma, <code>es</code> o <code>en</code>, en el componente
          de más arriba.
        </li>
        <li>
          Pásalo por props hasta un nieto que muestre «Hola» o «Hello», aunque
          el componente del medio no lo use.
        </li>
        <li>
          Repite la pantalla con un <code>IdiomaProvider</code> y un hook{" "}
          <code>useIdioma</code>. El del medio ya no declara esa prop.
        </li>
      </ol>
    </article>
  );
};

export default Clase5Practica;
