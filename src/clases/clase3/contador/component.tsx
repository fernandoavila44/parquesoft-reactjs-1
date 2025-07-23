import React, { useState, useEffect } from 'react';

interface CounterProps {
  initialValue?: number;
}

const FunctionalCounter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue);

  useEffect(() => {
    console.log('useEffect - Montaje o actualización');

    return () => {
      console.log('useEffect cleanup - Equivalente a componentWillUnmount');
    };
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