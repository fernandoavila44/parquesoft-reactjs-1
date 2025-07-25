import reactLogo from '../../assets/react.svg'
import JsData from './jsForReact';

const JSX = () => {
  // dentro de un componente podemos escribir JS como siempre
  const isMateOk = 1 + 1 === 2;
  console.log(isMateOk)

  function handleClick(value) {
    console.log('click', value)
  }

  const char = 'a'
  let optionalJSX


  if (char === 'a') {
    optionalJSX = <p>Es una a</p>
  } else {
    optionalJSX = <p>No es una a</p>
  } // ver donde se usa abajo


  const styles = { color: "red", fontSize: "20px" };


  // pero dentro del return solo podemos escribir expresiones
  // no podemos escribir flujos de control como if, for, while, etc

  // con JSX podemos escribir HTML dentro de JS :D
  // JsData();
  return (
    <>
      <h1>My App</h1>
      {/**los atributos en JSX se escriben en camelCase */}
      {/**el atributo className reemplaza a class */}
      <p className="paragraph-class">Some content</p>
      {/*podemos mandar funciones como atributos*/}
      {/*ojo a no poner los parentesis, solo el nombre de la funcion (la referencia) */}
      <button onClick={handleClick}>Click1</button>
      {/* puedo pasarle parametros a la funcion */}
      {/* necesito una funcion anonima que invoque a la funcion con los parametros */}
      <button onClick={() => handleClick('hola')}>Click2</button>
      {/*podemos escribir JS dentro de JSX*/}
      {32 + 32}
      {/*podemos invocar funciones que retornen JSX*/}
      {Title()}
      {/*podemos utilizar funciones como componentes (deben empezar con mayusculas)*/}
      <Title />
      <Paragraph />
      <Header />
      <Section />
      {optionalJSX}
      <p style={styles}>Texto rojo</p>
      <p style={{ color: "blue" }}>Texto azul</p>
    </>
  )
}

const Header = () => {
  return (
    <header>
      <h1>My App</h1>
      {/** podemos importar imágenes y ponerlas en el src */}
      <img src={reactLogo} width="50px" height="50px" alt='Sburb' />
    </header>
  )
}

function Title() {
  // Un componente simple que retorna un elemento h1
  return <h1>My App</h1>
}

function Paragraph() {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    </p>
  )
}

function Section() {
  // podemos utilizar componentes dentro de otros componentes
  return <section>
    <Title />
    <Paragraph />
  </section>
}



export default JSX;