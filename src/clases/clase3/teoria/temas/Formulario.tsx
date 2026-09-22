import { useState } from "react";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [guardado, setGuardado] = useState("");

  return (
    <article>
      <h2>Un input controlado</h2>
      <p>
        El input está controlado cuando React es el dueño del texto:{" "}
        <code>value</code> sale del estado y <code>onChange</code> lo actualiza.
        Si falta <code>onChange</code>, el campo no se puede escribir.
      </p>
      <Codigo
        codigo={`const [nombre, setNombre] = useState("");

<input
  value={nombre}
  onChange={(event) => setNombre(event.target.value)}
/>`}
      />
      <Demo titulo="Escribe un nombre y guárdalo">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setGuardado(nombre.trim());
          }}
          style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
        >
          <input
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            placeholder="Tu nombre"
            aria-label="Tu nombre"
          />
          <button type="submit" disabled={nombre.trim() === ""}>
            Guardar
          </button>
        </form>
        <p>{guardado ? `Guardado: ${guardado}` : "Todavía no hay un nombre guardado."}</p>
      </Demo>
      <Nota>
        <code>event.preventDefault()</code> evita que el formulario recargue la
        página. En React la página no se recarga: el estado se queda.
      </Nota>
    </article>
  );
};

export default Formulario;
