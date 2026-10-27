import { useMemo, useRef, useState, type RefObject } from "react";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

function duplicar(numero: number, registro: RefObject<number>) {
  registro.current += 1;
  return numero * 2;
}

const UseMemoTema = () => {
  const [numero, setNumero] = useState(2);
  const [clicks, setClicks] = useState(0);
  const sinMemo = useRef(0);
  const conMemo = useRef(0);

  const dobleCadaVez = duplicar(numero, sinMemo);
  const dobleGuardado = useMemo(() => duplicar(numero, conMemo), [numero]);

  return (
    <article>
      <h2>useMemo: el mismo resultado entre renders</h2>
      <p>
        <code>useCallback</code> guarda una función. <code>useMemo</code> guarda
        un valor. Si las dependencias no cambiaron, no vuelve a calcular:
        devuelve lo que ya tenía.
      </p>
      <Codigo
        codigo={`const doble = useMemo(() => numero * 2, [numero]);`}
      />
      <p>
        Número: <strong>{numero}</strong>. Clicks: <strong>{clicks}</strong>.
      </p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button type="button" onClick={() => setClicks((n) => n + 1)}>
          Sumar click (el padre se pinta)
        </button>
        <button type="button" onClick={() => setNumero((n) => n + 1)}>
          Subir el número
        </button>
      </div>
      <Demo titulo="El doble de ese número">
        <p>
          Sin useMemo: {dobleCadaVez}. Se calculó{" "}
          <strong>{sinMemo.current}</strong>{" "}
          {sinMemo.current === 1 ? "vez" : "veces"}.
        </p>
        <p>
          Con useMemo: {dobleGuardado}. Se calculó{" "}
          <strong>{conMemo.current}</strong>{" "}
          {conMemo.current === 1 ? "vez" : "veces"}.
        </p>
      </Demo>
      <Nota>
        Pulsa «Sumar click». El cálculo de la izquierda corre otra vez,
        aunque <code>numero</code> no cambió. El de la derecha no: sus
        dependencias siguen iguales. Pulsa «Subir el número»: los dos corren,
        porque ahora el valor de verdad cambió. En este ejemplo el trabajo
        es un <code>× 2</code>. En una app real lo usarías para un filtro
        o un recuento caro, no para una cuenta simple.
      </Nota>
    </article>
  );
};

export default UseMemoTema;
