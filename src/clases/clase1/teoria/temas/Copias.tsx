import {
  copiaDeArreglo,
  copiaProfunda,
  copiaSuperficial,
} from "../../jsForReact";
import { Codigo, Columnas, Demo, Nota, Pares } from "../../../../components/aula/Aula";

const Copias = () => {
  const superficial = copiaSuperficial();
  const profunda = copiaProfunda();
  const arreglo = copiaDeArreglo();

  return (
    <article>
      <h2>Objetos, arreglos y copias</h2>
      <p>
        En React no se modifica el estado que ya existe. Se crea una copia y
        se entrega esa copia. <code>{"{ ...objeto }"}</code> y{" "}
        <code>{"[...arreglo]"}</code> copian solo el primer nivel.
      </p>
      <Codigo
        codigo={`const copia = { ...pokemon };
copia.vida = 90;          // el original no cambia
copia.stats.ataque = 100; // el original SÍ cambia

const copiaCompleta = {
  ...pokemon,
  stats: { ...pokemon.stats },
};`}
      />
      <Columnas>
        <Demo titulo="Copia superficial">
          <Pares
            items={[
              { etiqueta: "Vida original", valor: String(superficial.original.vida) },
              { etiqueta: "Vida copia", valor: String(superficial.copia.vida) },
              { etiqueta: "Ataque original", valor: String(superficial.original.ataque) },
              { etiqueta: "Ataque copia", valor: String(superficial.copia.ataque) },
            ]}
          />
        </Demo>
        <Demo titulo="Copia de cada nivel">
          <Pares
            items={[
              { etiqueta: "Vida original", valor: String(profunda.original.vida) },
              { etiqueta: "Vida copia", valor: String(profunda.copia.vida) },
              { etiqueta: "Ataque original", valor: String(profunda.original.ataque) },
              { etiqueta: "Ataque copia", valor: String(profunda.copia.ataque) },
            ]}
          />
        </Demo>
      </Columnas>
      <Demo titulo="Arreglos">
        <p>
          Original: {arreglo.naturales.join(", ")}. Copia: {arreglo.copia.join(", ")}.
          Cambiar <code>copia[0]</code> no toca el arreglo original.
        </p>
      </Demo>
      <Nota>
        Si el ataque original también quedó en 100, es porque <code>stats</code>{" "}
        era el mismo objeto. En la copia profunda el ataque original sigue en 84.
        El código está en <code>jsForReact.js</code>.
      </Nota>
    </article>
  );
};

export default Copias;
