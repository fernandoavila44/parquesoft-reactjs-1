import { useEffect, useState } from "react";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

const EfectoSimple = () => {
  const [nombre, setNombre] = useState("Ada");

  useEffect(() => {
    document.title = `Hola, ${nombre}`;

    return () => {
      document.title = "Curso de React";
    };
  }, [nombre]);

  return (
    <article>
      <h2>useEffect corre después de pintar</h2>
      <p>
        El cuerpo del componente calcula la interfaz. El efecto es para algo
        que pasa después: cambiar el título de la pestaña, pedir datos, suscribirse
        a un evento. El arreglo del final dice cuándo volver a correrlo.
      </p>
      <Codigo
        codigo={`useEffect(() => {
  document.title = \`Hola, \${nombre}\`;

  return () => {
    document.title = "Curso de React";
  };
}, [nombre]);`}
      />
      <Demo titulo="Escribe y mira el título de la pestaña">
        <input
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          aria-label="Nombre del título"
        />
      </Demo>
      <Nota>
        La función que devuelve el efecto es la limpieza. Corre antes de
        repetir el efecto y cuando el componente se desmonta. En desarrollo
        React puede ejecutar el efecto dos veces para comprobar que esa
        limpieza deja todo como estaba.
      </Nota>
    </article>
  );
};

export default EfectoSimple;
