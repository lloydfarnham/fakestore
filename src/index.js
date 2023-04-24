import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './contexts/CartContext';
import OrderSuccessProvider from './contexts/OrderSuccessContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
        <OrderSuccessProvider>
      <App />
      </OrderSuccessProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
