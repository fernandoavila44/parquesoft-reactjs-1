import { useState } from "react";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

type ListaVistaProps = {
  tareas: string[];
  texto: string;
  onTexto: (valor: string) => void;
  onAgregar: () => void;
};

function ListaVista({ tareas, texto, onTexto, onAgregar }: ListaVistaProps) {
  return (
    <div>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea}>{tarea}</li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAgregar();
        }}
        style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
      >
        <input
          value={texto}
          onChange={(event) => onTexto(event.target.value)}
          placeholder="Nueva tarea"
          aria-label="Nueva tarea"
        />
        <button type="submit" disabled={texto.trim() === ""}>
          Agregar
        </button>
      </form>
    </div>
  );
}

function ListaTareas() {
  const [tareas, setTareas] = useState(["Leer el hook", "Probar este ejemplo"]);
  const [texto, setTexto] = useState("");

  const agregar = () => {
    const limpio = texto.trim();
    if (limpio === "") {
      return;
    }

    setTareas([...tareas, limpio]);
    setTexto("");
  };

  return (
    <ListaVista
      tareas={tareas}
      texto={texto}
      onTexto={setTexto}
      onAgregar={agregar}
    />
  );
}

const ContainerPresenter = () => {
  return (
    <article>
      <h2>Contenedor y vista</h2>
      <p>
        <code>ListaTareas</code> guarda los datos y decide qué pasa al agregar.
        <code> ListaVista</code> solo recibe props y dibuja. No llama a{" "}
        <code>useState</code>.
      </p>
      <Codigo
        codigo={`function ListaTareas() {
  const [tareas, setTareas] = useState(["Leer el hook"]);

  const agregar = () => setTareas([...tareas, "Otra"]);

  return <ListaVista tareas={tareas} onAgregar={agregar} />;
}

function ListaVista({ tareas, onAgregar }) {
  return (
    <ul>
      {tareas.map((tarea) => <li key={tarea}>{tarea}</li>)}
    </ul>
  );
}`}
      />
      <Demo titulo="La lista de abajo es solo la vista">
        <ListaTareas />
      </Demo>
      <Nota>
        La vista se puede reutilizar con otros datos. El contenedor se puede
        cambiar (por ejemplo, leer de una API) sin redibujar la lista desde cero.
      </Nota>
    </article>
  );
};

export default ContainerPresenter;
