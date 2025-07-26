import React from "react";
import { User } from "./card.interface";

const Card: React.FC<User> = ({ id, firstName, lastName, age, active }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: active ? "#33caec" : "#f27977",
        color: '#000'
      }}
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