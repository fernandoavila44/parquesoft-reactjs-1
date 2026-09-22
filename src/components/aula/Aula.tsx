import type { ReactNode } from "react";
import styles from "./aula.module.scss";

export type Tema = {
  id: string;
  titulo: string;
  resumen: string;
};

type TemarioProps = {
  etiqueta: string;
  temas: Tema[];
  activo: string;
  onElegir: (id: string) => void;
};

export function Estudio({
  menu,
  children,
}: {
  menu: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={styles.estudio}>
      {menu}
      <div className={styles.contenido}>{children}</div>
    </div>
  );
}

export function Temario({ etiqueta, temas, activo, onElegir }: TemarioProps) {
  return (
    <nav className={styles.temario} aria-label={etiqueta}>
      <p className={styles.etiqueta}>{etiqueta}</p>
      <ul>
        {temas.map((tema) => (
          <li key={tema.id}>
            <button
              type="button"
              className={activo === tema.id ? styles.activo : undefined}
              aria-current={activo === tema.id ? "true" : undefined}
              onClick={() => onElegir(tema.id)}
            >
              <strong>{tema.titulo}</strong>
              <span>{tema.resumen}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Codigo({ codigo }: { codigo: string }) {
  return (
    <pre className={styles.codigo}>
      <code>{codigo}</code>
    </pre>
  );
}

export function Demo({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className={styles.demo}>
      <h3>{titulo}</h3>
      {children}
    </section>
  );
}

export function Nota({ children }: { children: ReactNode }) {
  return <p className={styles.nota}>{children}</p>;
}

export function Pares({
  items,
}: {
  items: { etiqueta: string; valor: string }[];
}) {
  return (
    <dl className={styles.pares}>
      {items.map((item) => (
        <div key={item.etiqueta}>
          <dt>{item.etiqueta}</dt>
          <dd>{item.valor}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Columnas({ children }: { children: ReactNode }) {
  return <div className={styles.columnas}>{children}</div>;
}
