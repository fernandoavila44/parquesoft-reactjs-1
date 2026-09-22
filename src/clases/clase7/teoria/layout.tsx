import { useState, type ReactNode } from "react";
import { Estudio, Temario, type Tema } from "../../../components/aula/Aula";
import BasicRouting from "./components/BasicRouting";
import HooksExamples from "./components/HooksExamples";
import QueryParamsExample from "./components/QueryParamsExample";
import NavigationExample from "./components/NavigationExample";
import NestedRoutesExample from "./components/NestedRoutesExample";

const temas: (Tema & { vista: ReactNode })[] = [
  {
    id: "basic",
    titulo: "Rutas",
    resumen: "Route, Routes y Link",
    vista: <BasicRouting />,
  },
  {
    id: "hooks",
    titulo: "Hooks",
    resumen: "Leer la URL",
    vista: <HooksExamples />,
  },
  {
    id: "query",
    titulo: "Query params",
    resumen: "Datos en la búsqueda",
    vista: <QueryParamsExample />,
  },
  {
    id: "navigation",
    titulo: "navigate",
    resumen: "Cambiar de ruta en código",
    vista: <NavigationExample />,
  },
  {
    id: "nested",
    titulo: "Rutas anidadas",
    resumen: "Un layout y un Outlet",
    vista: <NestedRoutesExample />,
  },
];

const Layout = () => {
  const [activo, setActivo] = useState(temas[0].id);
  const tema = temas.find((item) => item.id === activo) ?? temas[0];

  return (
    <Estudio
      menu={
        <Temario
          etiqueta="Router"
          temas={temas}
          activo={activo}
          onElegir={setActivo}
        />
      }
    >
      <p>
        Esta aplicación ya es un router. Los botones de «navigate» de esta
        clase se quedan en la clase 7: teoría, práctica o inicio. No saltan a
        otra sesión.
      </p>
      {tema.vista}
    </Estudio>
  );
};

export default Layout;
