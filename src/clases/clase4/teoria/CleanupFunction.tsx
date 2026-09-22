import { useEffect, useState } from "react";
import { Codigo, Demo, Nota } from "../../../components/aula/Aula";

interface Post {
  id: number;
  title: string;
  body: string;
}

function DetallePost() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const controlador = new AbortController();
    const espera = window.setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        signal: controlador.signal,
      })
        .then((response) => response.json())
        .then((data: Post) => setPost(data))
        .catch((error: unknown) => {
          if (error instanceof Error && error.name === "AbortError") {
            return;
          }
        });
    }, 1200);

    return () => {
      window.clearTimeout(espera);
      controlador.abort();
    };
  }, []);

  if (!post) return <p>Cargando post... desmóntalo antes de que termine.</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

const Limpieza = () => {
  const [visible, setVisible] = useState(true);
  const [aviso, setAviso] = useState(
    "El componente está montado. Desmóntalo durante la carga."
  );

  return (
    <article>
      <h2>La limpieza deshace el efecto</h2>
      <p>
        Si el componente desaparece mientras el <code>fetch</code> sigue en
        camino, la respuesta no debe hacer <code>setState</code> en algo que ya
        no existe. <code>AbortController</code> cancela la petición. El{" "}
        <code>clearTimeout</code> cancela la espera.
      </p>
      <Codigo
        codigo={`return () => {
  clearTimeout(espera);
  controlador.abort();
};`}
      />
      <Demo titulo="Monta y desmonta el detalle">
        <button
          type="button"
          onClick={() => {
            setVisible((estaVisible) => {
              setAviso(
                estaVisible
                  ? "Desmontado. La limpieza cortó la espera y abortó el fetch."
                  : "Montado de nuevo. Tienes un segundo para desmontarlo."
              );
              return !estaVisible;
            });
          }}
        >
          {visible ? "Desmontar" : "Montar"}
        </button>
        <p>{aviso}</p>
        {visible && <DetallePost />}
      </Demo>
      <Nota>
        La limpieza también corre antes de volver a ejecutar el efecto, cuando
        cambia una dependencia. No solo al desmontar.
      </Nota>
    </article>
  );
};

export default Limpieza;
