export type Clase = {
  numero: number;
  ruta: string;
  titulo: string;
  resumen: string;
};

export const clases: Clase[] = [
  {
    numero: 1,
    ruta: "/clase1",
    titulo: "JavaScript y JSX",
    resumen: "La base antes de React",
  },
  {
    numero: 2,
    ruta: "/clase2",
    titulo: "Componentes y props",
    resumen: "Piezas de la interfaz",
  },
  {
    numero: 3,
    ruta: "/clase3",
    titulo: "Estado y eventos",
    resumen: "useState y formularios",
  },
  {
    numero: 4,
    ruta: "/clase4",
    titulo: "useEffect",
    resumen: "Efectos y datos remotos",
  },
  {
    numero: 5,
    ruta: "/clase5",
    titulo: "Prop drilling y useContext",
    resumen: "Compartir datos",
  },
  {
    numero: 6,
    ruta: "/clase6",
    titulo: "useReducer",
    resumen: "Estados con varios pasos",
  },
  {
    numero: 7,
    ruta: "/clase7",
    titulo: "React Router",
    resumen: "Navegación",
  },
  {
    numero: 8,
    ruta: "/clase8",
    titulo: "Performance",
    resumen: "memo, useCallback y useMemo",
  },
  {
    numero: 9,
    ruta: "/clase9",
    titulo: "Patrones",
    resumen: "Reutilizar lógica",
  },
];
