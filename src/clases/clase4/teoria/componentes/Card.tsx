import React from "react";
import { User } from "./card.interface";

interface CardProps extends User {
  onClick?: () => void;
}

// 🔹 React.memo evita re-renders si las props no cambian
const Card: React.FC<CardProps> = React.memo(({
  id,
  firstName,
  lastName,
  age,
  active,
  onClick
}) => {
  console.log(`Renderizando Card ${id}`); // Solo se muestra si cambian sus props

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: active ? "#e6f7ff" : "#f9f9f9",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <h3>{firstName} {lastName}</h3>
      <p>ID: {id}</p>
      <p>Edad: {age}</p>
      <p>Estado: {active ? "Activo" : "Inactivo"}</p>
    </div>
  );
});

export default Card;