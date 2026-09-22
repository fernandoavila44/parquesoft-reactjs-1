import React, { useState } from "react";
import Card from "./componentes/Card";
import { User } from "./componentes/card.interface";

const Users: React.FC = () => {

  const [selectedUser, setSelectedUser] = useState<null | User>(null);

  const users: User[] = [
    { id: 1, firstName: "Andres", lastName: "Garcia", age: 36, active: true },
    { id: 2, firstName: "María", lastName: "López", age: 25, active: false },
    { id: 3, firstName: "Carlos", lastName: "Martínez", age: 42, active: true },
  ];

  const handleSelectedUser = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>El clic sube, el estado se queda en el padre</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <Card
            key={user.id}
            {...user}
            onSelectedUser={() => handleSelectedUser(user)}
          />
        ))}
      </div>
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

export default Users;