import { leerPokemon } from "../../jsForReact";
import { Codigo, Demo, Nota, Pares } from "../../../../components/aula/Aula";

const Ficha = ({ nombre, tipo }: { nombre: string; tipo: string }) => {
  return (
    <p>
      {nombre} es de tipo {tipo}.
    </p>
  );
};

const Destructuring = () => {
  const pokemon = leerPokemon();

  return (
    <article>
      <h2>Destructuring y spread</h2>
      <p>
        Destructuring saca campos de un objeto o posiciones de un arreglo con
        el nombre que ya tienen. Las props de un componente son exactamente eso:
        un objeto que se desarma en la función.
      </p>
      <Codigo
        codigo={`const { nombre, tipo } = pokemon;
const [primero, , tercero] = movimientos;
const extra = [...movimientos, "Giro fuego"];

function Ficha({ nombre, tipo }) {
  return <p>{nombre}</p>;
}`}
      />
      <Demo titulo="Lo que devolvió leerPokemon()">
        <Pares
          items={[
            { etiqueta: "Nombre", valor: pokemon.nombre },
            { etiqueta: "Tipo", valor: pokemon.tipo },
            { etiqueta: "Primer movimiento", valor: pokemon.primero },
            { etiqueta: "Tercero", valor: pokemon.tercero },
          ]}
        />
        <p>Con un movimiento más: {pokemon.movimientosExtra.join(", ")}.</p>
        <Ficha nombre={pokemon.nombre} tipo={pokemon.tipo} />
      </Demo>
      <Nota>
        En arreglos, un hueco (<code>[primero, , tercero]</code>) salta esa
        posición. <code>tercero</code> es Garra, no Vuelo.
      </Nota>
    </article>
  );
};

export default Destructuring;
