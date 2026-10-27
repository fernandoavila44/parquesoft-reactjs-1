import { memo, useCallback, useRef, useState } from "react";
import { Codigo, Columnas, Demo, Nota } from "../../../../components/aula/Aula";

function Boton({ onClick, etiqueta }: { onClick: () => void; etiqueta: string }) {
  const veces = useRef(0);
  veces.current += 1;

  return (
    <div>
      <button type="button" onClick={onClick}>
        {etiqueta}
      </button>
      <p>
        Me pinté <strong>{veces.current}</strong>{" "}
        {veces.current === 1 ? "vez" : "veces"}.
      </p>
    </div>
  );
}

const BotonMemo = memo(Boton);

const UseCallbackTema = () => {
  const [clicks, setClicks] = useState(0);

  const saludarNueva = () => {
    console.log("Hola");
  };

  const saludarIgual = useCallback(() => {
    console.log("Hola");
  }, []);

  return (
    <article>
      <h2>useCallback: la misma función entre renders</h2>
      <p>
        <code>memo</code> compara las props. Una función escrita dentro del
        padre es un objeto nuevo en cada render, aunque el código sea el
        mismo. Para <code>memo</code> eso es un cambio, y el hijo se pinta
        otra vez. <code>useCallback</code> guarda la función y la reutiliza.
      </p>
      <Codigo
        codigo={`const saludar = useCallback(() => {
  console.log("Hola");
}, []);

<BotonMemo onClick={saludar} etiqueta="Saludar" />`}
      />
      <p>
        Clicks del padre: <strong>{clicks}</strong>
      </p>
      <button type="button" onClick={() => setClicks((n) => n + 1)}>
        Sumar click (el padre se pinta)
      </button>
      <Columnas>
        <Demo titulo="Función nueva en cada render">
          <BotonMemo onClick={saludarNueva} etiqueta="Saludar" />
        </Demo>
        <Demo titulo="Función con useCallback">
          <BotonMemo onClick={saludarIgual} etiqueta="Saludar" />
        </Demo>
      </Columnas>
      <Nota>
        Los dos botones están envueltos en <code>memo</code>. Pulsa «Sumar
        click». El de la izquierda se pinta: recibió otra función. El de la
        derecha no: recibió la misma. <code>useCallback</code> no evita que
        el padre se pinte. Solo evita crear una función nueva, y eso importa
        cuando el hijo usa <code>memo</code>.
      </Nota>
    </article>
  );
};

export default UseCallbackTema;
