import type { ReactNode } from "react";
import { Codigo, Demo, Nota } from "../../../components/aula/Aula";
import Layout from "./layout";

function Marco({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: 12,
        padding: 12,
        background: "#fff",
      }}
    >
      <h3>{titulo}</h3>
      {children}
    </section>
  );
}

const Clase2Teoria = () => {
  return (
    <article>
      <p>
        Un componente es una función que recibe datos y devuelve interfaz. Esos
        datos se llaman props y siempre bajan del padre al hijo.{" "}
        <code>children</code> es la prop con lo que escribes entre las etiquetas
        de apertura y de cierre.
      </p>
      <Codigo
        codigo={`function Card({ firstName, children }) {
  return (
    <article>
      <h3>{firstName}</h3>
      {children}
    </article>
  );
}

<Card firstName="Ada" key={usuario.id}>
  <p>Activa</p>
</Card>`}
      />
      <Demo titulo="children: el marco no decide el contenido">
        <Marco titulo="Marco">
          <p>Este párrafo lo puso el padre, no el marco.</p>
        </Marco>
      </Demo>
      <h2>La misma tarjeta, distintos datos</h2>
      <p>
        <code>key</code> usa el id del usuario, no su posición en la lista. Así
        React reconoce la misma tarjeta si el orden cambia.
      </p>
      <Layout />
      <Nota>
        Esta tarjeta solo pinta. En la clase 3 la misma idea también avisa
        cuando alguien hace clic.
      </Nota>
    </article>
  );
};

export default Clase2Teoria;
