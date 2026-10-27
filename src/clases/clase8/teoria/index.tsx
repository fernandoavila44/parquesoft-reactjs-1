import { useState, type ReactNode } from "react";
import { Estudio, Temario, type Tema } from "../../../components/aula/Aula";
import Memo from "./temas/Memo";
import UseCallbackTema from "./temas/UseCallback";
import UseMemoTema from "./temas/UseMemo";

const temas: (Tema & { vista: ReactNode })[] = [
  {
    id: "memo",
    titulo: "memo",
    resumen: "Saltar al hijo si no cambió",
    vista: <Memo />,
  },
  {
    id: "callback",
    titulo: "useCallback",
    resumen: "La misma función",
    vista: <UseCallbackTema />,
  },
  {
    id: "memo-valor",
    titulo: "useMemo",
    resumen: "El mismo resultado",
    vista: <UseMemoTema />,
  },
];

const Clase8Teoria = () => {
  const [activo, setActivo] = useState(temas[0].id);
  const tema = temas.find((item) => item.id === activo) ?? temas[0];

  return (
    <Estudio
      menu={
        <Temario
          etiqueta="Performance"
          temas={temas}
          activo={activo}
          onElegir={setActivo}
        />
      }
    >
      <p>
        Estos tres sirven para no repetir trabajo. Recórrelos en orden: primero
        el hijo que no hace falta pintar, después la función que no hace falta
        crear, después el valor que no hace falta calcular. Mira el número de
        pintadas. Si sube de dos en dos, es el modo estricto de desarrollo: lo
        que importa es comparar un lado con el otro.
      </p>
      {tema.vista}
    </Estudio>
  );
};

export default Clase8Teoria;
