import React from 'react';

import './App.css';
import Header from './components/Layouts/Header';
import Store from './Pages/Store';
import CartProvider from './store/CartProvider';

function App() {

  return (
    <CartProvider>
      <Header />
      <Store />
    </CartProvider>
  );
}

export default App;
