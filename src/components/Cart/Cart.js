import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { OrderSuccessContext } from "../../contexts/OrderSuccessContext";
import './Cart.css';
import CartCard from '../CartCard/CartCard';
import axios from "axios";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { order, setOrder } = useContext(OrderSuccessContext);

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
          setCartTotal(total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        })
      )
      .catch(error => console.error(error));
  }, [itemCounts]);

  function handleCheckout() {
    setOrder(true);
  }

  return (
    <div className="Cart">
      <div className="cart-items-container">
      { cart.length > 0 ? ( 
        <div className="cart-key-container">
          <h1 className="cart-key-title">Item</h1>
          <h1 className="tc">Price</h1>
          <h1 className="tc">Quantity</h1>
          <h1 className="tc">Remove</h1>
        </div>
       ) : null }
      { cart.length > 0 ? ( 
        <div className="cart-border"></div>
       ) : null }
        { cart.length == 0 ? ( 
          <div className="cart-empty-container">
            <h1 className="cart-items-empty">No items in cart</h1> 
            <Link to="/"><button className="button contact-submit">Return to home</button></Link>
          </div>
        ) : null }
        {Object.entries(itemCounts).map(([id, quantity]) => (
          <CartCard key={id} id={id} quantity={quantity} />
        ))}
        { cart.length > 0 ? ( 
          <div className="cart-total-checkout">
          <h1>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;€{cartTotal}</h1>
            <button className="button" onClick={handleCheckout}>Checkout</button>
          </div>
        ) : null }
      </div>
    </div>
  );
}

export default Cart;
