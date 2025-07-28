import React from "react";
import { User } from "./card.interface";

const Card: React.FC<User> = ({
  id,
  firstName,
  lastName,
  age,
  active,
  onClick
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: active ? "#e6f7ff" : "#f9f9f9",
        cursor: "pointer",
        color: '#000'
      }}
      onClick={onClick}
    >
      <h3>
        {firstName} {lastName}
      </h3>
      <p>ID: {id}</p>
      <p>Edad: {age}</p>
      <p>Estado: {active ? "Activo" : "Inactivo"}</p>
    </div>
  );
};

export default Card;