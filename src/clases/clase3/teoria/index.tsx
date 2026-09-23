import { useState, type ReactNode } from "react";
import { Estudio, Nota, Temario, type Tema } from "../../../components/aula/Aula";
import Users from "./layout";
import Contador from "./temas/Contador";
import Formulario from "./temas/Formulario";

const temas: (Tema & { vista: ReactNode })[] = [
  {
    id: "contador",
    titulo: "useState",
    resumen: "El valor de este render",
    vista: <Contador />,
  },
  {
    id: "eventos",
    titulo: "Eventos",
    resumen: "El hijo avisa, el padre guarda",
    vista: <Users />,
  },
  {
    id: "formulario",
    titulo: "Formulario",
    resumen: "Controlado y no controlado",
    vista: <Formulario />,
  },
];

const Clase3Teoria = () => {
  const [activo, setActivo] = useState(temas[0].id);
  const tema = temas.find((item) => item.id === activo) ?? temas[0];

  return (
    <Estudio
      menu={
        <Temario
          etiqueta="Estado"
          temas={temas}
          activo={activo}
          onElegir={setActivo}
        />
      }
    >
      <p>
        El ciclo de vida de un componente de función llega con{" "}
        <code>useEffect</code>, en la clase 4. Aquí el tema es el estado y lo
        que pasa cuando alguien hace clic o escribe.
      </p>
      {tema.vista}
      {activo === "eventos" && (
        <Nota>
          Respecto a la clase 2, la tarjeta ahora recibe{" "}
          <code>onSelectedUser</code>. El padre guarda quién fue elegido. La
          tarjeta no tiene su propio estado.
        </Nota>
      )}
    </Estudio>
  );
};

export default Clase3Teoria;
