import { useState, type ReactNode } from "react";
import { Estudio, Temario, type Tema } from "../../../components/aula/Aula";
import CustomHooks from "./temas/CustomHooks";
import ContainerPresenter from "./temas/ContainerPresenter";
import RenderProps from "./temas/RenderProps";
import Hoc from "./temas/Hoc";

const temas: (Tema & { vista: ReactNode })[] = [
  {
    id: "hooks",
    titulo: "Custom hooks",
    resumen: "Sacar la lógica a una función",
    vista: <CustomHooks />,
  },
  {
    id: "contenedor",
    titulo: "Contenedor y vista",
    resumen: "Datos y diseño separados",
    vista: <ContainerPresenter />,
  },
  {
    id: "render-props",
    titulo: "Render props",
    resumen: "Una función decide qué pintar",
    vista: <RenderProps />,
  },
  {
    id: "hoc",
    titulo: "HOC",
    resumen: "Envolver un componente",
    vista: <Hoc />,
  },
];

const Clase9Teoria = () => {
  const [activo, setActivo] = useState(temas[0].id);
  const tema = temas.find((item) => item.id === activo) ?? temas[0];

  return (
    <Estudio
      menu={
        <Temario
          etiqueta="Patrones"
          temas={temas}
          activo={activo}
          onElegir={setActivo}
        />
      }
    >
      <p>
        Cada patrón está completo en un archivo de <code>temas/</code>. No hace
        falta saltar entre cuatro carpetas para ver cómo se conectan.
      </p>
      {tema.vista}
    </Estudio>
  );
};

export default Clase9Teoria;
