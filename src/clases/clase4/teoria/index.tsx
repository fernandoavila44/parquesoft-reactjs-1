import { useState, type ReactNode } from "react";
import { Estudio, Temario, type Tema } from "../../../components/aula/Aula";
import EfectoSimple from "./temas/EfectoSimple";
import PostsList from "./layout";
import Limpieza from "./CleanupFunction";

const temas: (Tema & { vista: ReactNode })[] = [
  {
    id: "efecto",
    titulo: "El efecto",
    resumen: "Después de pintar",
    vista: <EfectoSimple />,
  },
  {
    id: "datos",
    titulo: "Datos remotos",
    resumen: "Carga, error y lista",
    vista: <PostsList />,
  },
  {
    id: "limpieza",
    titulo: "Limpieza",
    resumen: "Cancelar al desmontar",
    vista: <Limpieza />,
  },
];

const Clase4Teoria = () => {
  const [activo, setActivo] = useState(temas[0].id);
  const tema = temas.find((item) => item.id === activo) ?? temas[0];

  return (
    <Estudio
      menu={
        <Temario
          etiqueta="Efectos"
          temas={temas}
          activo={activo}
          onElegir={setActivo}
        />
      }
    >
      <p>
        Un efecto sincroniza el componente con algo de afuera: el título de la
        pestaña, una API, un temporizador. Si el efecto deja algo andando, la
        limpieza lo apaga.
      </p>
      {tema.vista}
    </Estudio>
  );
};

export default Clase4Teoria;
