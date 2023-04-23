import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import OrderSuccess from './components/OrderSuccess/OrderSuccess';
import './App.css';
import CartProvider from './contexts/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <div className="app-container">
          <div>
            <Nav />
            <Routes>
              <Route path="/" element={<ProductList/>} />
              <Route path="/:id" element={<ProductDetail/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer/>
        </div>
        <OrderSuccess />
      </CartProvider>
    </div>
  );
}

export default App;
