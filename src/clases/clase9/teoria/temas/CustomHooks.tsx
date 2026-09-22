import { useState } from "react";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

function useContador(inicial: number) {
  const [valor, setValor] = useState(inicial);

  const sumar = () => setValor(valor + 1);
  const restar = () => setValor(valor - 1);

  return { valor, sumar, restar };
}

function Contador({ etiqueta }: { etiqueta: string }) {
  const { valor, sumar, restar } = useContador(0);

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <button type="button" onClick={restar}>
        -
      </button>
      <strong>
        {etiqueta}: {valor}
      </strong>
      <button type="button" onClick={sumar}>
        +
      </button>
    </div>
  );
}

const CustomHooks = () => {
  return (
    <article>
      <h2>Custom hooks</h2>
      <p>
        Un custom hook es una función cuyo nombre empieza con <code>use</code>{" "}
        y puede llamar a otros hooks. Sirve para sacar un pedazo de estado que
        quieres repetir, sin envolver componentes.
      </p>
      <Codigo
        codigo={`function useContador(inicial) {
  const [valor, setValor] = useState(inicial);
  const sumar = () => setValor(valor + 1);
  const restar = () => setValor(valor - 1);
  return { valor, sumar, restar };
}

function Contador() {
  const { valor, sumar, restar } = useContador(0);
  return <button onClick={sumar}>{valor}</button>;
}`}
      />
      <Demo titulo="Cada llamada tiene su propio estado">
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <Contador etiqueta="Grupo A" />
          <Contador etiqueta="Grupo B" />
        </div>
      </Demo>
      <Nota>
        Sube el grupo A. El grupo B no se mueve: cada <code>useContador()</code>{" "}
        guarda su número aparte. El hook y el componente están en este mismo
        archivo para poder leerlos juntos.
      </Nota>
    </article>
  );
};

export default CustomHooks;
