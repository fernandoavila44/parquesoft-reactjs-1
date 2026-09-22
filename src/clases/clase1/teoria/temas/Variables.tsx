import { useState } from "react";
import { cumplirAnios, nombre } from "../../jsForReact";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

const Variables = () => {
  const [edad, setEdad] = useState(20);

  return (
    <article>
      <h2>const, let y el estado</h2>
      <p>
        <code>const</code> no se puede reasignar. <code>let</code> sí. En un
        componente casi no usamos <code>let</code> para datos que se ven en
        pantalla: si cambias una variable común, React no vuelve a pintar.
      </p>
      <Codigo
        codigo={`const nombre = "Ada";
let edad = 20;
edad = edad + 1;

// En React, el cambio pasa por el estado:
const [edad, setEdad] = useState(20);
setEdad(edad + 1);`}
      />
      <Demo titulo="La función es JavaScript. setEdad es React.">
        <p>
          <strong>{nombre}</strong> tiene <strong>{edad}</strong> años.
        </p>
        <button type="button" onClick={() => setEdad(cumplirAnios(edad))}>
          Cumplir años
        </button>
      </Demo>
      <Nota>
        Los tipos simples (number, string, boolean, null, undefined) se copian
        por valor. Objetos y arreglos se comparten por referencia. Eso se ve en
        el tema siguiente.
      </Nota>
    </article>
  );
};

export default Variables;
