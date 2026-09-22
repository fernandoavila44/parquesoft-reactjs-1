// JavaScript que vas a usar todo el tiempo en React.
// Este archivo no pinta nada: solo calcula.
// La clase 1 llama estas funciones y muestra el resultado.

export const nombre = "Ada";

// let se puede reasignar. const no.
// En React, para que la pantalla cambie, no reasignamos: avisamos con setEstado.
export function cumplirAnios(edad) {
  let actual = edad;
  actual = actual + 1;
  return actual;
}

// El spread copia el primer nivel.
// vida es un número: la copia tiene el suyo.
// stats es un objeto: original y copia comparten el mismo.
export function copiaSuperficial() {
  const pokemon = {
    nombre: "Charizard",
    vida: 78,
    stats: { ataque: 84 },
  };

  const copia = { ...pokemon };
  copia.vida = 90;
  copia.stats.ataque = 100;

  return {
    original: { vida: pokemon.vida, ataque: pokemon.stats.ataque },
    copia: { vida: copia.vida, ataque: copia.stats.ataque },
  };
}

// Para copiar también lo de adentro, hay que copiar cada nivel.
export function copiaProfunda() {
  const pokemon = {
    nombre: "Charizard",
    vida: 78,
    stats: { ataque: 84 },
  };

  const copia = {
    ...pokemon,
    stats: { ...pokemon.stats },
  };
  copia.vida = 90;
  copia.stats.ataque = 100;

  return {
    original: { vida: pokemon.vida, ataque: pokemon.stats.ataque },
    copia: { vida: copia.vida, ataque: copia.stats.ataque },
  };
}

export function copiaDeArreglo() {
  const naturales = [1, 2, 3, 4, 5];
  const copia = [...naturales];
  copia[0] = 9;

  return { naturales, copia };
}

export function sumar(a, b) {
  return a + b;
}

export function multiplicar(a, b) {
  return a * b;
}

// Una función puede recibir otra función.
// En React, onClick={manejarClick} entrega la función; no la ejecuta todavía.
export function aplicar(operacion, a, b) {
  return operacion(a, b);
}

export function leerPokemon() {
  const pokemon = { id: 6, nombre: "Charizard", tipo: "Fuego" };
  const { nombre: nombrePokemon, tipo } = pokemon;

  const movimientos = ["Lanzallamas", "Vuelo", "Garra"];
  const [primero, , tercero] = movimientos;
  const movimientosExtra = [...movimientos, "Giro fuego"];

  return { nombre: nombrePokemon, tipo, primero, tercero, movimientosExtra };
}

// map transforma y conserva la cantidad.
// filter se queda con los que cumplen la condición.
// reduce junta todo en un solo valor.
export function transformar(numeros) {
  const masUno = numeros.map((numero) => numero + 1);
  const mayoresA50 = numeros.filter((numero) => numero > 50);
  const suma = numeros.reduce((total, numero) => total + numero, 0);

  return { masUno, mayoresA50, suma };
}
