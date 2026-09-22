import { transformar } from "../../jsForReact";
import { Codigo, Columnas, Demo, Nota } from "../../../../components/aula/Aula";

const numeros = [23, 56, 78, 100, 205];
const estudiantes = ["Lina", "Mateo", "Sofía"];

const Listas = () => {
  const { masUno, mayoresA50, suma } = transformar(numeros);

  return (
    <article>
      <h2>map, filter y reduce</h2>
      <p>
        Dentro de JSX no se puede escribir un <code>for</code>. Para pintar una
        lista se usa <code>map</code>: recorre el arreglo y devuelve otro del
        mismo tamaño, en este caso de elementos.
      </p>
      <Codigo
        codigo={`const masUno = numeros.map((numero) => numero + 1);
const mayoresA50 = numeros.filter((numero) => numero > 50);
const suma = numeros.reduce((total, numero) => total + numero, 0);

estudiantes.map((nombre) => <li key={nombre}>{nombre}</li>);`}
      />
      <Columnas>
        <Demo titulo="map: cada número + 1">
          <p>{masUno.join(", ")}</p>
        </Demo>
        <Demo titulo="filter: mayores que 50">
          <p>{mayoresA50.join(", ")}</p>
        </Demo>
        <Demo titulo="reduce: un solo total">
          <p>{suma}</p>
        </Demo>
      </Columnas>
      <Demo titulo="map dentro de JSX">
        <ul>
          {estudiantes.map((estudiante) => (
            <li key={estudiante}>{estudiante}</li>
          ))}
        </ul>
      </Demo>
      <Nota>
        <code>key</code> ayuda a React a reconocer cada fila. Usa un id estable,
        no el índice, cuando la lista puede cambiar de orden.
      </Nota>
    </article>
  );
};

export default Listas;
