import React, { useState, useCallback, useMemo } from "react";
import Card from "./componentes/Card";
import { User } from "./componentes/card.interface";

type Props = {
  users: User[]
}
const Layout: React.FC<Props> = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // 🔹 useCallback: Memoriza la función para evitar recrearla en cada render
  const handleClick = useCallback((user: User) => {
    setSelectedUser(user);
  }, []); // Sin dependencias (solo se crea una vez)

  // 🔹 useMemo: Memoriza el cálculo de "activeUsersCount" para evitar recalcularlo innecesariamente
  const activeUsersCount = useMemo(() => {
    console.log("Calculando usuarios activos...")
    return users.filter((user) => user.active).length;
  }, [users]); // Solo recalcula si `users` cambia

  // console.log("render")
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <p>Usuarios activos: {activeUsersCount}</p> {/* Mostramos el cálculo memorizado */}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <Card
            key={user.id}
            {...user}
            onClick={() => handleClick(user)}
          />
        ))}
      </div>

      {/* Sección del usuario seleccionado */}
      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
        <h3>Usuario Seleccionado:</h3>
        {selectedUser ? (
          <div>
            <p>Nombre: {selectedUser.firstName} {selectedUser.lastName}</p>
            <p>Edad: {selectedUser.age}</p>
            <p>Estado: {selectedUser.active ? "Activo" : "Inactivo"}</p>
          </div>
        ) : (
          <p>No hay usuario seleccionado</p>
        )}
      </div>
    </div>
  );
};

export default Layout;