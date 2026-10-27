import { useState } from "react";

const Counter = () => {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  console.log('renderizando')
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={() => setCounter(counter - 1)}>Decrementar</button>
      <button onClick={() => setCounter(0)}>Reiniciar</button>
    </div>
  )
}

export default Counter;