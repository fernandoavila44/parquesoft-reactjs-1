import { useState } from "react";
import { Demo, Nota } from "../../../../components/aula/Aula";

type TemaProps = {
  tema: "claro" | "oscuro";
  onCambiar: () => void;
};

function Hijo({ tema, onCambiar }: TemaProps) {
  const oscuro = tema === "oscuro";

  return (
    <div
      style={{
        padding: 12,
        borderRadius: 10,
        background: oscuro ? "#1e293b" : "#f8fafc",
        color: oscuro ? "#f8fafc" : "#0f172a",
      }}
    >
      <p>El hijo sí usa el tema: {tema}.</p>
      <button type="button" onClick={onCambiar}>
        Cambiar tema
      </button>
    </div>
  );
}

function Padre({ tema, onCambiar }: TemaProps) {
  return (
    <div style={{ border: "1px dashed #94a3b8", borderRadius: 12, padding: 12 }}>
      <p>El padre no usa el tema. Solo lo recibe para pasarlo.</p>
      <Hijo tema={tema} onCambiar={onCambiar} />
    </div>
  );
}

const PropDrilling = () => {
  const [tema, setTema] = useState<"claro" | "oscuro">("claro");

  const cambiar = () => {
    setTema((actual) => (actual === "claro" ? "oscuro" : "claro"));
  };

  return (
    <article>
      <h2>Prop drilling</h2>
      <p>
        El estado vive en el abuelo. El padre no lo necesita, pero tiene que
        declararlo en sus props para que el hijo lo reciba. Esa cadena es el
        prop drilling.
      </p>
      <Demo titulo="Abuelo, padre, hijo">
        <Padre tema={tema} onCambiar={cambiar} />
      </Demo>
      <Nota>
        Con dos niveles se aguanta. Con cinco, cada componente del medio cambia
        cada vez que el dato cambia de forma.
      </Nota>
    </article>
  );
};

export default PropDrilling;
