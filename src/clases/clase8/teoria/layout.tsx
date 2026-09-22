import { useCallback, useMemo, useRef, useState } from "react";
import CardBase, { CardMemo } from "./componentes/Card";
import { User } from "./componentes/card.interface";
import { Nota } from "../../../components/aula/Aula";

const inicial: User[] = [
  { id: 1, firstName: "Andres", lastName: "Garcia", age: 36, active: true },
  { id: 2, firstName: "María", lastName: "López", age: 25, active: false },
  { id: 3, firstName: "Carlos", lastName: "Martínez", age: 42, active: true },
];

const Layout = () => {
  const [users, setUsers] = useState(inicial);
  const [tick, setTick] = useState(0);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const calculos = useRef(0);

  const handleClick = useCallback((user: User) => {
    setSelectedUser(user);
  }, []);

  const activeUsersCount = useMemo(() => {
    calculos.current += 1;
    return users.filter((user) => user.active).length;
  }, [users]);

  const alternarPrimero = () => {
    setUsers((actuales) =>
      actuales.map((user, index) =>
        index === 0 ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      <p>
        Pulsa «Renderizar padre». Las tarjetas de la izquierda se pintan otra
        vez. Las de la derecha no, porque <code>memo</code> vio las mismas
        props y <code>useCallback</code> entregó la misma función.
      </p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button type="button" onClick={() => setTick((valor) => valor + 1)}>
          Renderizar padre ({tick})
        </button>
        <button type="button" onClick={alternarPrimero}>
          Cambiar al primero
        </button>
      </div>
      <p>
        Usuarios activos: {activeUsersCount}. El filtro se calculó{" "}
        {calculos.current} {calculos.current === 1 ? "vez" : "veces"}.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
        }}
      >
        <section>
          <h2>Sin memo</h2>
          {users.map((user) => (
            <CardBase key={user.id} {...user} onClick={handleClick} />
          ))}
        </section>
        <section>
          <h2>Con memo</h2>
          {users.map((user) => (
            <CardMemo key={user.id} {...user} onClick={handleClick} />
          ))}
        </section>
      </div>
      <p>
        {selectedUser
          ? `Elegido: ${selectedUser.firstName} ${selectedUser.lastName}`
          : "Nadie elegido."}
      </p>
      <Nota>
        <code>useMemo</code> depende de <code>users</code>. Renderizar el padre
        no cambia ese arreglo, así que el filtro no se repite. Cambiar al
        primero sí crea un arreglo nuevo y el cálculo corre otra vez. En
        desarrollo React puede pintar dos veces seguidas, y por eso «Pintados»
        en la izquierda sube de dos en dos. En la derecha no se mueve.
      </Nota>
    </div>
  );
};

export default Layout;
