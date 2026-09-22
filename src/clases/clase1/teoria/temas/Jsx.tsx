import { useState } from "react";
import reactLogo from "../../../../assets/react.svg";
import { Codigo, Demo, Nota } from "../../../../components/aula/Aula";

const handleClick = (origen: string) => {
  console.log(`click desde ${origen}`);
};

const Header = () => {
  return (
    <header>
      <img src={reactLogo} width={40} height={40} alt="Logo de React" />
    </header>
  );
};

function Title() {
  return <h3>Un componente es una función que devuelve JSX</h3>;
}

const Jsx = () => {
  const letra = "a";
  const [mensaje, setMensaje] = useState("Todavía no hay clic");

  let aviso = <p>La letra no es a</p>;
  if (letra === "a") {
    aviso = <p>La letra es a</p>;
  }

  return (
    <article>
      <h2>JSX</h2>
      <p>
        JSX parece HTML escrito dentro de JavaScript. En el <code>return</code>{" "}
        solo entran expresiones: un valor, un ternario o una llamada. Un{" "}
        <code>if</code> o un <code>for</code> van antes del return.
      </p>
      <Codigo
        codigo={`const aviso = letra === "a" ? <p>Es a</p> : <p>No es a</p>;

<button onClick={() => handleClick("con argumentos")}>
  Click
</button>

<p style={{ color: "crimson" }}>Texto</p>
<p className="destacado">class pasa a ser className</p>`}
      />
      <Demo titulo="Lo que devuelve este componente">
        <Header />
        <Title />
        {aviso}
        {letra === "a" ? <p>Ternario: es a</p> : <span>Ternario: no es a</span>}
        <p style={{ color: "crimson" }}>El atributo style recibe un objeto.</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <button type="button" onClick={() => setMensaje("Click sin argumentos")}>
            Sin argumentos
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick("con argumentos");
              setMensaje("Click con argumentos (también quedó en la consola)");
            }}
          >
            Con argumentos
          </button>
        </div>
        <p>{mensaje}</p>
      </Demo>
      <Nota>
        <code>onClick=&#123;handleClick&#125;</code> entrega la función.{" "}
        <code>onClick=&#123;handleClick()&#125;</code> la ejecuta mientras React
        pinta, y el clic ya no tiene qué llamar. Si necesitas argumentos, envuelve
        la llamada: <code>{"onClick={() => handleClick(\"ok\")}"}</code>.
      </Nota>
    </article>
  );
};

export default Jsx;
