import Layout from "./layout";

const Clase8Teoria = () => {
  return (
    <article>
      <p>
        <code>memo</code>, <code>useCallback</code> y <code>useMemo</code> evitan
        trabajo cuando un padre se vuelve a pintar y los hijos, o un cálculo,
        no cambiaron. Si el botón de render no mueve los números de la derecha,
        el memo está haciendo su trabajo.
      </p>
      <Layout />
    </article>
  );
};

export default Clase8Teoria;
