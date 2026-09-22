import type { ReactNode } from "react";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

type ConNombre = {
  nombre: string;
};

function withMarco(Componente: (props: ConNombre) => ReactNode) {
  function ConMarco(props: ConNombre) {
    return (
      <div
        style={{
          border: "2px solid #1d4ed8",
          borderRadius: 12,
          padding: "0.75rem 1rem",
        }}
      >
        <Componente {...props} />
      </div>
    );
  }

  return ConMarco;
}

function Saludo({ nombre }: ConNombre) {
  return <p style={{ margin: 0 }}>Hola, {nombre}</p>;
}

function Etiqueta({ nombre }: ConNombre) {
  return <strong>{nombre}</strong>;
}

const SaludoConMarco = withMarco(Saludo);
const EtiquetaConMarco = withMarco(Etiqueta);

const Hoc = () => {
  return (
    <article>
      <h2>Higher-order component</h2>
      <p>
        Un HOC es una función que recibe un componente y devuelve otro. El nuevo
        componente pinta el original y le agrega algo alrededor. Aquí el extra
        es un marco azul.
      </p>
      <Codigo
        codigo={`function withMarco(Componente) {
  return function ConMarco(props) {
    return (
      <div style={{ border: "2px solid #1d4ed8" }}>
        <Componente {...props} />
      </div>
    );
  };
}

const SaludoConMarco = withMarco(Saludo);`}
      />
      <Demo titulo="Un mismo marco para dos componentes">
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <SaludoConMarco nombre="Ada" />
          <EtiquetaConMarco nombre="Estudiante" />
        </div>
      </Demo>
      <Nota>
        <code>{"<Componente {...props} />"}</code> reenvía las props originales.
        Los HOC eran la forma vieja de compartir lógica. Hoy, si lo que quieres
        compartir es estado o un efecto, empieza por un custom hook.
      </Nota>
    </article>
  );
};

export default Hoc;
