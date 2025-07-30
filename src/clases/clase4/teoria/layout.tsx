import React, { useState, useCallback, useMemo } from "react";
import Card from "./componentes/Card";
import { User } from "./componentes/card.interface";

const Layout: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Datos de usuarios (simulando una API)
  const users: User[] = [
    { id: 1, firstName: "Andres", lastName: "Garcia", age: 36, active: true },
    { id: 2, firstName: "María", lastName: "López", age: 25, active: false },
    { id: 3, firstName: "Carlos", lastName: "Martínez", age: 42, active: true },
  ];

  // 🔹 useCallback: Memoriza la función para evitar recrearla en cada render
  const handleClick = useCallback((user: User) => {
    setSelectedUser(user);
  }, []); // Sin dependencias (solo se crea una vez)

  // 🔹 useMemo: Memoriza el cálculo de "activeUsersCount" para evitar recalcularlo innecesariamente
  const activeUsersCount = useMemo(() => {
    console.log("Calculando usuarios activos...");
    return users.filter((user) => user.active).length;
  }, [users]); // Solo recalcula si `users` cambia

  console.log("render")
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <p>Usuarios activos: {activeUsersCount}</p> {/* Mostramos el cálculo memorizado */}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <Card
            key={user.id}
            {...user}
            onClick={() => handleClick(user)} // 🔹 Función memorizada
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