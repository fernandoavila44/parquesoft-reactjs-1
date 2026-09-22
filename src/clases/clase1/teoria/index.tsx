import { useState, type ReactNode } from "react";
import { Estudio, Temario, type Tema } from "../../../components/aula/Aula";
import Variables from "./temas/Variables";
import Copias from "./temas/Copias";
import Funciones from "./temas/Funciones";
import Destructuring from "./temas/Destructuring";
import Listas from "./temas/Listas";
import Modulos from "./temas/Modulos";
import Jsx from "./temas/Jsx";

const temas: (Tema & { vista: ReactNode })[] = [
  {
    id: "variables",
    titulo: "Variables",
    resumen: "const, let y estado",
    vista: <Variables />,
  },
  {
    id: "copias",
    titulo: "Copias",
    resumen: "objetos y arreglos",
    vista: <Copias />,
  },
  {
    id: "funciones",
    titulo: "Funciones",
    resumen: "callbacks y eventos",
    vista: <Funciones />,
  },
  {
    id: "destructuring",
    titulo: "Destructuring",
    resumen: "sacar campos y props",
    vista: <Destructuring />,
  },
  {
    id: "listas",
    titulo: "Listas",
    resumen: "map, filter, reduce",
    vista: <Listas />,
  },
  {
    id: "modulos",
    titulo: "Módulos",
    resumen: "import y export",
    vista: <Modulos />,
  },
  {
    id: "jsx",
    titulo: "JSX",
    resumen: "HTML dentro de JS",
    vista: <Jsx />,
  },
];

const Clase1Teoria = () => {
  const [activo, setActivo] = useState(temas[0].id);
  const tema = temas.find((item) => item.id === activo) ?? temas[0];

  return (
    <Estudio
      menu={
        <Temario
          etiqueta="Antes de React"
          temas={temas}
          activo={activo}
          onElegir={setActivo}
        />
      }
    >
      <p>
        El cálculo está en <code>jsForReact.js</code> y los módulos en{" "}
        <code>fn.js</code>. Esta pantalla muestra el resultado. El último tema
        mete esas ideas dentro de JSX.
      </p>
      {tema.vista}
    </Estudio>
  );
};

export default Clase1Teoria;
