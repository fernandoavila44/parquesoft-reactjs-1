import React, { Fragment } from "react";
import Card from "./componentes/Card";
import { User } from "./componentes/card.interface";

const Layout: React.FC = () => {
  // Array de objetos tipado como User[]

  const users: User[] = [
    { id: 1, firstName: "Andres", lastName: "Garcia", age: 36, active: true },
    { id: 2, firstName: "María", lastName: "López", age: 25, active: false },
    { id: 3, firstName: "Carlos", lastName: "Martínez", age: null, active: false },
    { id: 4, firstName: "Juan", lastName: "Cardenas", age: null, active: false },
    { id: 5, firstName: "Pedro", lastName: "Rojas", active: true },
  ];

  return (
    <>
      <div>
        <h2>Lista de Usuarios</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {users.map((user) => (
            <Card
              {...user}
              key={`usuarios-${user.id}`}
            />
          ))}
        </div>
      </div>
      <p>Esto es un parrafo</p>
      <div></div>
      <span></span>
    </>
  );
};

export default Layout;