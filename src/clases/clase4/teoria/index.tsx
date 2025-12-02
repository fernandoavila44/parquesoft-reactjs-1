import { User } from "./componentes/card.interface";
import Layout from "./layout";

const Clase4Teoria = () => {

  const users: User[] = [
    { id: 1, firstName: "Andres", lastName: "Garcia", age: 36, active: true },
    { id: 2, firstName: "María", lastName: "López", age: 25, active: false },
    { id: 3, firstName: "Carlos", lastName: "Martínez", age: 42, active: true },
    { id: 4, firstName: "Pepito", lastName: "Perez", age: 42, active: true },
    { id: 5, firstName: "Pastor", lastName: "Lopez", age: 42, active: true },
  ];
  return (
    <div>
      <h1>Teoría: Hooks de performance - useCallback, useMemo, React.Memo</h1>
      <p>Aquí va la teoría sobre Hooks de performance - useCallback, useMemo, React.Memo</p>
      <Layout users={users} />
    </div>
  );
};

export default Clase4Teoria;
