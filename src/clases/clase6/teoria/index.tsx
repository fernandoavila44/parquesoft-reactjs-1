import { useState, type ReactNode } from "react";
import { Estudio, Temario, type Tema } from "../../../components/aula/Aula";
import ContadorReducer from "./temas/ContadorReducer";
import Carrito from "./layout";

const temas: (Tema & { vista: ReactNode })[] = [
  {
    id: "contador",
    titulo: "Contador",
    resumen: "Acciones con nombre",
    vista: <ContadorReducer />,
  },
  {
    id: "carrito",
    titulo: "Carrito",
    resumen: "Varios pasos y contexto",
    vista: <Carrito />,
  },
];

const Clase6Teoria = () => {
  const [activo, setActivo] = useState(temas[0].id);
  const tema = temas.find((item) => item.id === activo) ?? temas[0];

  return (
    <Estudio
      menu={
        <Temario
          etiqueta="Reducer"
          temas={temas}
          activo={activo}
          onElegir={setActivo}
        />
      }
    >
      <p>
        Empieza por el contador, que es el mismo número de la clase 3 escrito
        como acciones. El carrito es el mismo mecanismo con una lista.
      </p>
      {tema.vista}
    </Estudio>
  );
};

export default Clase6Teoria;
