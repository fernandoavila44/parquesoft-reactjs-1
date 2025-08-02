import React from 'react';
import { CartProvider } from './context/CartContext';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';

const Layout: React.FC = () => {
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