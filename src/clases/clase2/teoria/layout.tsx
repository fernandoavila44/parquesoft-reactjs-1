import React from "react";
import Card from "./componentes/Card";
import { User } from "./componentes/card.interface";

const Layout: React.FC = () => {
  // Array de objetos tipado como User[]
  const users: User[] = [
    { id: 1, firstName: "Andres", lastName: "Garcia", age: 36, active: true },
    { id: 2, firstName: "María", lastName: "López", age: 25, active: false },
    { id: 3, firstName: "Carlos", lastName: "Martínez", age: null, active: true },
  ];

  const numbers: number[] = [1, 2, 3, 4]

  numbers.map((numero) => (
    console.log(numero)
  ))

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <Card
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            age={user.age}
            active={user.active}
          // {...user} // Spread operator pasa todas las props de User
          />
        ))}
      </div>
    </div>
  );
};

export default Layout;