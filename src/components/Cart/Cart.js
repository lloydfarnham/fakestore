import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import './Cart.css';
import CartCard from '../CartCard/CartCard';

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const itemCounts = cart.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  return (
    <div className="Cart">
        <div className="cart-items-container">
        <div className="cart-key-container">
            <h1 className="cart-key-title">Item</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
            <h1>Remove</h1>
        </div>
            {Object.entries(itemCounts).map(([id, quantity]) => (
            <CartCard key={id} id={id} quantity={quantity} />
            ))}
        </div>
    </div>
  );
}

export default Cart;
