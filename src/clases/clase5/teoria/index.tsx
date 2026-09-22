import { useState, type ReactNode } from "react";
import { Estudio, Temario, type Tema } from "../../../components/aula/Aula";
import PropDrilling from "./temas/PropDrilling";
import Contexto from "./layout";

const temas: (Tema & { vista: ReactNode })[] = [
  {
    id: "drilling",
    titulo: "Prop drilling",
    resumen: "La prop cruza quien no la usa",
    vista: <PropDrilling />,
  },
  {
    id: "contexto",
    titulo: "useContext",
    resumen: "El del medio no la recibe",
    vista: <Contexto />,
  },
];

const Clase5Teoria = () => {
  const [activo, setActivo] = useState(temas[0].id);
  const tema = temas.find((item) => item.id === activo) ?? temas[0];

  return (
    <Estudio
      menu={
        <Temario
          etiqueta="Datos compartidos"
          temas={temas}
          activo={activo}
          onElegir={setActivo}
        />
      }
    >
      <p>
        Primero el problema: una prop que atraviesa componentes que no la
        usan. Después, la misma pantalla leída desde un contexto.
      </p>
      {tema.vista}
    </Estudio>
  );
};

export default Clase5Teoria;
