import { useState } from "react";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

const Contador = () => {
  const [count, setCount] = useState(0);

  const sumarTresVecesMal = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const sumarTresVecesBien = () => {
    setCount((valor) => valor + 1);
    setCount((valor) => valor + 1);
    setCount((valor) => valor + 1);
  };

  return (
    <article>
      <h2>useState guarda el valor entre renders</h2>
      <p>
        Llamar a <code>setCount</code> pide otro render. <code>count</code> es
        el valor de este render, no el que acaban de encolar las líneas de
        arriba.
      </p>
      <Codigo
        codigo={`setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
// las tres leen el mismo count: suma 1

setCount((valor) => valor + 1);
setCount((valor) => valor + 1);
setCount((valor) => valor + 1);
// cada función recibe el resultado anterior: suma 3`}
      />
      <Demo titulo="Prueba los dos botones">
        <p>
          Contador: <strong>{count}</strong>
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <button type="button" onClick={sumarTresVecesMal}>
            Sumar 3 leyendo count
          </button>
          <button type="button" onClick={sumarTresVecesBien}>
            Sumar 3 con la función
          </button>
          <button type="button" onClick={() => setCount(0)}>
            Reiniciar
          </button>
        </div>
      </Demo>
      <Nota>
        Cada clic vuelve a ejecutar el componente. Por eso un{" "}
        <code>console.log</code> dentro del cuerpo aparece otra vez: no es un
        error, es un render.
      </Nota>
    </article>
  );
};

export default Contador;
