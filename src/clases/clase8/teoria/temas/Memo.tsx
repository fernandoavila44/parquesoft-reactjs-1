import { memo, useRef, useState } from "react";
import { Codigo, Columnas, Demo, Nota } from "../../../../components/aula/Aula";

function Hijo({ nombre }: { nombre: string }) {
  const veces = useRef(0);
  veces.current += 1;

  return (
    <p>
      Hola, <strong>{nombre}</strong>. Me pinté{" "}
      <strong>{veces.current}</strong> {veces.current === 1 ? "vez" : "veces"}.
    </p>
  );
}

const HijoMemo = memo(Hijo);

const Memo = () => {
  const [clicks, setClicks] = useState(0);
  const [nombre, setNombre] = useState("Ada");

  return (
    <article>
      <h2>memo: no vuelvas a pintar al hijo si no cambió</h2>
      <p>
        Cuando el padre se pinta, React pinta también a los hijos.{" "}
        <code>memo</code> envuelve al hijo y lo compara con la vez anterior:
        si las props son iguales, lo deja como está.
      </p>
      <Codigo
        codigo={`function Hijo({ nombre }) {
  return <p>Hola, {nombre}</p>;
}

const HijoMemo = memo(Hijo);`}
      />
      <p>
        Clicks del padre: <strong>{clicks}</strong>
      </p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button type="button" onClick={() => setClicks((n) => n + 1)}>
          Sumar click (el padre se pinta)
        </button>
        <button
          type="button"
          onClick={() => setNombre((n) => (n === "Ada" ? "Luis" : "Ada"))}
        >
          Cambiar nombre
        </button>
      </div>
      <Columnas>
        <Demo titulo="Sin memo">
          <Hijo nombre={nombre} />
        </Demo>
        <Demo titulo="Con memo">
          <HijoMemo nombre={nombre} />
        </Demo>
      </Columnas>
      <Nota>
        Pulsa «Sumar click». El de la izquierda suma pintadas: el padre se
        pintó y arrastró al hijo. El de la derecha no se mueve: sus props
        siguen siendo las mismas. Pulsa «Cambiar nombre»: los dos se pintan,
        porque ahora sí cambió una prop. El hijo tiene que vivir fuera del
        padre. Si lo defines adentro, React lo ve como un componente nuevo
        en cada render y <code>memo</code> no sirve.
      </Nota>
    </article>
  );
};

export default Memo;
