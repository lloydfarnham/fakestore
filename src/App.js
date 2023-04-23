import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import OrderSuccess from './components/OrderSuccess/OrderSuccess';
import './App.css';
import CartProvider from './contexts/CartContext';
import CartTotalProvider from './contexts/CartTotalContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <CartTotalProvider>
          <div className="app-container">
            <div>
              <Nav />
              <Routes>
                <Route path="/" element={<ProductList/>} />
                <Route path="/:id" element={<ProductDetail/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
            <Footer/>
          </div>
          <OrderSuccess />
        </CartTotalProvider>
      </CartProvider>
    </div>
  );
}

export default App;
