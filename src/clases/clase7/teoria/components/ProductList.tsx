import React, { useContext } from 'react';
import { CartContext, Product, useCart } from '../context/CartContext';

const products: Product[] = [
  { id: 1, name: 'Camiseta React', price: 25 },
  { id: 2, name: 'Libro TypeScript', price: 40 },
  { id: 3, name: 'Taza Programador', price: 15 },
];

export const ProductList: React.FC = () => {

  const { dispatch } = useCart();

  // const { dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};