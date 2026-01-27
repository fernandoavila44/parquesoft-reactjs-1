import React from 'react';
import { CartProvider } from './context/CartContext';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { useParams } from 'react-router-dom';

const Layout: React.FC = () => {

  const router = useParams();

  console.log(router)

  return (
    <CartProvider>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Layout;