import { NavLink, Outlet } from "react-router-dom";
import { clases } from "./curso";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <NavLink to="/" end className={styles.marca}>
          <strong>Curso de React</strong>
          <span>Elige un tema y léelo a la derecha</span>
        </NavLink>

        <nav className={styles.menu} aria-label="Temas del curso">
          {clases.map((clase) => (
            <NavLink
              key={clase.ruta}
              to={clase.ruta}
              className={({ isActive }) =>
                isActive ? `${styles.enlace} ${styles.activo}` : styles.enlace
              }
            >
              <span className={styles.numero}>
                {String(clase.numero).padStart(2, "0")}
              </span>
              <span>
                <strong>{clase.titulo}</strong>
                <small>{clase.resumen}</small>
              </span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
