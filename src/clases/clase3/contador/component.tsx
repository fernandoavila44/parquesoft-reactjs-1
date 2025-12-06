import React, { useState } from 'react';


const FunctionalCounter: React.FC = () => {

  const [count, setCount] = useState(0);

  const handleOperation = (operacion: string) => () => {
    if (operacion === "ADD")
      setCount((prevState) => prevState + 1)
    if (operacion === "DEC")
      setCount(count - 1)
    if (operacion === "RST")
      setCount(0)
  }

  console.log("Renderizando")
  console.log(count)
  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleOperation("ADD")}>
        Incrementar
      </button>
      <button onClick={handleOperation("RST")}>
        Reset
      </button>
      <button onClick={handleOperation("DEC")}>
        Decrementar
      </button>
    </div>
  );
};

export default FunctionalCounter;