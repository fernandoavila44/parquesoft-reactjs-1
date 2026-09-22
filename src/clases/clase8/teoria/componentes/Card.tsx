import { memo, useRef } from "react";
import { User } from "./card.interface";
import UserState from "./UserState";

interface CardProps extends User {
  onClick?: (user: User) => void;
}

function CardBase({
  id,
  firstName,
  lastName,
  age,
  active,
  onClick,
}: CardProps) {
  const pintados = useRef(0);
  pintados.current += 1;

  return (
    <button
      type="button"
      onClick={() =>
        onClick?.({
          id,
          firstName,
          lastName,
          age,
          active,
        })
      }
      style={{
        display: "block",
        textAlign: "left",
        border: "1px solid #e2e8f0",
        padding: "16px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: active ? "#e0f2fe" : "#f8fafc",
        color: "#0f172a",
        cursor: "pointer",
      }}
    >
      <h3>
        {firstName} {lastName}
      </h3>
      <p>Edad: {age}</p>
      <UserState active={active} />
      <p>Pintados: {pintados.current}</p>
    </button>
  );
}

export const CardMemo = memo(CardBase);
export default CardBase;
