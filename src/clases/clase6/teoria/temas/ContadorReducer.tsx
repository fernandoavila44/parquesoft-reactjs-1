import { useReducer } from "react";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

type Accion =
  | { type: "sumar" }
  | { type: "restar" }
  | { type: "reiniciar" };

function reducer(state: number, action: Accion) {
  switch (action.type) {
    case "sumar":
      return state + 1;
    case "restar":
      return state - 1;
    case "reiniciar":
      return 0;
    default:
      return state;
  }
}

const ContadorReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <article>
      <h2>useReducer describe los cambios por nombre</h2>
      <p>
        <code>useState</code> basta cuando el siguiente valor es una cuenta
        simple. <code>useReducer</code> conviene cuando el estado cambia de
        varias formas y quieres ver cada forma con un nombre: sumar, restar,
        reiniciar.
      </p>
      <Codigo
        codigo={`function reducer(state, action) {
  switch (action.type) {
    case "sumar":
      return state + 1;
    case "restar":
      return state - 1;
    case "reiniciar":
      return 0;
    default:
      return state;
  }
}

const [count, dispatch] = useReducer(reducer, 0);
dispatch({ type: "sumar" });`}
      />
      <Demo titulo="El componente no calcula el siguiente número">
        <p>
          Contador: <strong>{count}</strong>
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <button type="button" onClick={() => dispatch({ type: "sumar" })}>
            Sumar
          </button>
          <button type="button" onClick={() => dispatch({ type: "restar" })}>
            Restar
          </button>
          <button type="button" onClick={() => dispatch({ type: "reiniciar" })}>
            Reiniciar
          </button>
        </div>
      </Demo>
      <Nota>
        El reducer es una función pura: recibe el estado y la acción, y
        devuelve el estado nuevo. No llama a <code>fetch</code> ni a{" "}
        <code>dispatch</code> desde adentro.
      </Nota>
    </article>
  );
};

export default ContadorReducer;
