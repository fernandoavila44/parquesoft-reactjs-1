import { Demo, Nota } from "../../../components/aula/Aula";
import Medio from "./components/Medio";
import { ThemeProvider } from "./context/ThemeContext";

const Contexto = () => {
  return (
    <article>
      <h2>useContext</h2>
      <p>
        El provider guarda el tema. Cualquier componente por debajo puede
        leerlo con <code>useTheme</code>, sin importar cuántos padres haya en
        el medio. Si alguien llama el hook fuera del provider, el hook lanza
        un error: el valor por defecto es <code>undefined</code>, no un objeto
        vacío.
      </p>
      <Demo titulo="El del medio ya no tiene esa prop">
        <ThemeProvider>
          <Medio />
        </ThemeProvider>
      </Demo>
      <Nota>
        El contexto sirve para un dato que muchos leen, como el tema o el
        usuario de la sesión. Un dato que solo usan padre e hijo sigue bien
        como prop.
      </Nota>
    </article>
  );
};

export default Contexto;
