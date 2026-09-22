import { useState } from "react";
import { aplicar, multiplicar, sumar } from "../../jsForReact";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

const Funciones = () => {
  const [resultado, setResultado] = useState(() => aplicar(sumar, 3, 4));

  return (
    <article>
      <h2>Funciones y callbacks</h2>
      <p>
        Una función puede guardarse en una variable y también pasarse a otra
        función. React usa eso en cada evento: le entregas la función, y React
        la llama cuando ocurre el clic.
      </p>
      <Codigo
        codigo={`const sumar = (a, b) => a + b;

function aplicar(operacion, a, b) {
  return operacion(a, b);
}

aplicar(sumar, 3, 4); // 7

// En JSX:
// onClick={sumar}              entrega la función
// onClick={() => sumar(3, 4)}  cuando hacen falta argumentos
// onClick={sumar()}            se ejecuta al pintar, no al hacer clic`}
      />
      <Demo titulo="La misma función aplicar, distinta operación">
        <p>
          Resultado de 3 y 4: <strong>{resultado}</strong>
        </p>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button type="button" onClick={() => setResultado(aplicar(sumar, 3, 4))}>
            Sumar
          </button>
          <button type="button" onClick={() => setResultado(aplicar(multiplicar, 3, 4))}>
            Multiplicar
          </button>
        </div>
      </Demo>
      <Nota>
        <code>sumar</code> y <code>multiplicar</code> viven en{" "}
        <code>jsForReact.js</code>. Este componente solo decide cuál usar y
        muestra el número.
      </Nota>
    </article>
  );
};

export default Funciones;
