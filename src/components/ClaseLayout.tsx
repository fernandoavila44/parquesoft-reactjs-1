import { NavLink, Outlet } from "react-router-dom";
import styles from "./ClaseLayout.module.scss";

interface ClaseLayoutProps {
  claseNumber: number;
  claseTitle: string;
}

const ClaseLayout = ({ claseNumber, claseTitle }: ClaseLayoutProps) => {
  const base = `/clase${claseNumber}`;

  return (
    <div>
      <header className={styles.cabecera}>
        <p className={styles.kicker}>Clase {claseNumber}</p>
        <h1>{claseTitle}</h1>
        <nav className={styles.pestanas} aria-label="Secciones de la clase">
          <NavLink
            to={`${base}/teoria`}
            className={({ isActive }) =>
              isActive ? `${styles.pestana} ${styles.activa}` : styles.pestana
            }
          >
            Teoría
          </NavLink>
          <NavLink
            to={`${base}/practica`}
            className={({ isActive }) =>
              isActive ? `${styles.pestana} ${styles.activa}` : styles.pestana
            }
          >
            Práctica
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default ClaseLayout;
