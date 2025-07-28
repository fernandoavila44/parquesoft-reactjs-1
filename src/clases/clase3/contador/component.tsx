import React, { useState, useEffect } from 'react';

interface CounterProps {
  initialValue?: number;
}

const FunctionalCounter: React.FC<CounterProps> = ({ initialValue = 0 }) => {

  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log('hago fetch al backend');
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  console.log('Render - Renderizando el componente');

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>
        Incrementar
      </button>
      <button onClick={handleDecrement}>
        Decrementar
      </button>
    </div>
  );
};

export default FunctionalCounter;