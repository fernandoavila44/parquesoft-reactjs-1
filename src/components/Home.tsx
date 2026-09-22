import { Link } from "react-router-dom";
import { clases } from "../curso";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <p className={styles.kicker}>Inicio</p>
      <h1>Bienvenido al curso</h1>
      <p>
        El temario queda a la izquierda. El contenido de la clase que elijas
        aparece en este panel. La clase 1 recorre el JavaScript que vas a usar
        en React. La clase 9 muestra cuatro formas de reutilizar lógica, cada
        una en un solo archivo.
      </p>
      <div className={styles.grid}>
        {clases.map((clase) => (
          <Link key={clase.ruta} to={clase.ruta} className={styles.tarjeta}>
            <small>Clase {clase.numero}</small>
            <strong>{clase.titulo}</strong>
            <span>{clase.resumen}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
