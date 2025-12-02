import React from 'react';
import { useCart } from '../context/CartContext';

export const Cart: React.FC = () => {
  const { state, dispatch } = useCart();
  console.log(state)
  return (
    <div>
      <h2>Carrito</h2>
      {state.items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {state.items.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>
                  Quitar uno
                </button>
              </li>
            ))}
          </ul>
          <p>Total: ${state.total.toFixed(2)}</p>
          <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};