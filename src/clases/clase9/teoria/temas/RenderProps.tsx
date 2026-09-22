import { useState, type MouseEvent, type ReactNode } from "react";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

type Punto = {
  x: number;
  y: number;
};

type ZonaProps = {
  render: (punto: Punto) => ReactNode;
};

function ZonaDelMouse({ render }: ZonaProps) {
  const [punto, setPunto] = useState<Punto>({ x: 0, y: 0 });

  const mover = (event: MouseEvent<HTMLDivElement>) => {
    const caja = event.currentTarget.getBoundingClientRect();
    setPunto({
      x: Math.round(event.clientX - caja.left),
      y: Math.round(event.clientY - caja.top),
    });
  };

  return (
    <div
      onMouseMove={mover}
      style={{
        position: "relative",
        height: 140,
        marginBottom: 12,
        border: "1px dashed #93c5fd",
        borderRadius: 12,
        background: "#f8fafc",
        overflow: "hidden",
      }}
    >
      {render(punto)}
    </div>
  );
}

const RenderProps = () => {
  return (
    <article>
      <h2>Render props</h2>
      <p>
        El componente que sigue al mouse no decide el diseño. Recibe una
        función en la prop <code>render</code> y la llama con la posición. Quien
        usa el componente elige qué pintar.
      </p>
      <Codigo
        codigo={`function ZonaDelMouse({ render }) {
  const [punto, setPunto] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(event) => setPunto({ x: event.clientX, y: event.clientY })}>
      {render(punto)}
    </div>
  );
}

<ZonaDelMouse render={({ x, y }) => <p>{x}, {y}</p>} />`}
      />
      <Demo titulo="La misma zona, dos diseños">
        <ZonaDelMouse
          render={({ x, y }) => (
            <p style={{ margin: 16 }}>
              Coordenadas dentro del recuadro: {x}, {y}
            </p>
          )}
        />
        <ZonaDelMouse
          render={({ x, y }) => (
            <span
              style={{
                position: "absolute",
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
              }}
            >
              ●
            </span>
          )}
        />
      </Demo>
      <Nota>
        Cada recuadro tiene su propio estado. Este patrón aparece en librerías
        antiguas. Si solo quieres compartir la lógica, un custom hook suele
        leerse mejor.
      </Nota>
    </article>
  );
};

export default RenderProps;
