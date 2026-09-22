import frutas, { ciudades, nombres } from "../../fn";
import { Codigo, Columnas, Demo, Nota } from "../../../../components/aula/Aula";

const Modulos = () => {
  return (
    <article>
      <h2>import y export</h2>
      <p>
        Cada componente del curso vive en su archivo y se exporta para que otro
        lo pueda usar. Hay dos formas: <code>export default</code> (una por
        archivo, el nombre al importar lo eliges tú) y los named exports (puedes
        tener varios, y el nombre debe coincidir).
      </p>
      <Codigo
        codigo={`// fn.js
const frutas = ["manzana", "banano", "pera"];
export const nombres = ["Ana", "Luis", "Sofía"];
export const ciudades = ["Bogotá", "Medellín", "Cali"];
export default frutas;

// otro archivo
import frutas, { nombres, ciudades } from "./fn";`}
      />
      <Columnas>
        <Demo titulo="Default: frutas">
          <p>{frutas.join(", ")}</p>
        </Demo>
        <Demo titulo="Named: nombres">
          <p>{nombres.join(", ")}</p>
        </Demo>
        <Demo titulo="Named: ciudades">
          <p>{ciudades.join(", ")}</p>
        </Demo>
      </Columnas>
      <Nota>
        Un componente casi siempre se exporta como default:{" "}
        <code>export default function Saludo()</code>. Si el archivo exporta
        varias cosas (un tipo y una función, por ejemplo), esas van como named
        exports.
      </Nota>
    </article>
  );
};

export default Modulos;
