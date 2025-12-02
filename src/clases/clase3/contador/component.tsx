import React, { useState } from 'react';


const FunctionalCounter: React.FC = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }
  console.log("Renderizando")
  console.log(count)
  return (
    <div>
      <h2>Contador: {count}</h2>
      <button >
        Incrementar
      </button>
      <button>
        Decrementar
      </button>
    </div>
  );
};

export default FunctionalCounter;