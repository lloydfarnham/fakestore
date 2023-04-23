import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import './Cart.css';
import CartCard from '../CartCard/CartCard';
import { CartTotalContext } from "../../contexts/CartTotalContext";
import axios from "axios";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const [cartTotal, setCartTotal] = useState(0);

  const itemCounts = cart.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  useEffect(() => {
    let total = 0;
    const productIds = Object.keys(itemCounts);
    const productRequests = productIds.map(productId =>
      axios.get(`https://fakestoreapi.com/products/${productId}`)
    );
    axios
      .all(productRequests)
      .then(
        axios.spread((...responses) => {
          responses.forEach((response, index) => {
            const product = response.data;
            const price = product.price;
            const quantity = itemCounts[product.id];
            total += price * quantity;
          });
          setCartTotal(total.toFixed(2).toLocaleString());
        })
      )
      .catch(error => console.error(error));
  }, [itemCounts]);

  return (
    <div className="Cart">
      <div className="cart-items-container">
        <div className="cart-key-container">
          <h1 className="cart-key-title">Item</h1>
          <h1 className="tc">Price</h1>
          <h1 className="tc">Quantity</h1>
          <h1 className="tc">Remove</h1>
        </div>
        <div className="cart-border"></div>
        {Object.entries(itemCounts).map(([id, quantity]) => (
          <CartCard key={id} id={id} quantity={quantity} />
        ))}
        <div className="cart-total-checkout">
        <h1>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;€{cartTotal}</h1>
          <button className="button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
