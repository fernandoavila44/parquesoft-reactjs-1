import { useRef, useState } from "react";
import { Codigo, Columnas, Demo, Nota } from "../../../../components/aula/Aula";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const campo = useRef<HTMLInputElement>(null);
  const [leido, setLeido] = useState("");

  const leerCampo = () => {
    setLeido(campo.current?.value ?? "");
  };

  const vaciarCampo = () => {
    if (campo.current) {
      campo.current.value = "";
    }
  };

  return (
    <article>
      <h2>Controlado y no controlado</h2>
      <p>
        En el controlado, React guarda el texto: cada tecla pasa por{" "}
        <code>onChange</code> y el input muestra lo que hay en el estado. En el
        no controlado, el navegador guarda el texto. React solo lo mira cuando
        alguien lee <code>campo.current.value</code>.
      </p>
      <Codigo
        codigo={`const [nombre, setNombre] = useState("");
<input
  value={nombre}
  onChange={(event) => setNombre(event.target.value)}
/>

const campo = useRef(null);
<input ref={campo} />
const texto = campo.current.value;`}
      />
      <Columnas>
        <Demo titulo="Controlado">
          <input
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            placeholder="Escribe y mira abajo"
            aria-label="Nombre controlado"
          />
          <p>
            React ve: <strong>{nombre === "" ? "(vacío)" : nombre}</strong>
          </p>
          <button type="button" onClick={() => setNombre("")}>
            Vaciar
          </button>
        </Demo>
        <Demo titulo="No controlado">
          <input
            ref={campo}
            defaultValue=""
            placeholder="Escribe y luego pulsa Leer"
            aria-label="Nombre no controlado"
          />
          <p>
            React leyó: <strong>{leido === "" ? "(todavía no)" : leido}</strong>
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button type="button" onClick={leerCampo}>
              Leer
            </button>
            <button type="button" onClick={vaciarCampo}>
              Vaciar el campo
            </button>
          </div>
        </Demo>
      </Columnas>
      <Demo titulo="Controlado sin actualizar el estado">
        <input
          value="Este texto no cambia"
          onChange={() => undefined}
          aria-label="Input que no deja cambiar el texto"
        />
        <p>React vuelve a pintar el mismo value en cada tecla, así que no se escribe.</p>
      </Demo>
      <Nota>
        Escribe en los dos. En el controlado, el texto de abajo cambia con cada
        letra. En el otro, no cambia hasta que pulsas Leer. Si vacías el campo
        no controlado, el input queda en blanco y React sigue mostrando la
        última         lectura. El tercer campo tiene un <code>value</code> fijo: React lo
        vuelve a pintar igual en cada tecla, así que no se puede escribir.
      </Nota>
    </article>
  );
};

export default Formulario;
