import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import axios from "axios";
import "./CartCard.css";
import { GoTrashcan } from "react-icons/go";

function CartCard(props) {
  const [itemDetail, setItemDetail] = useState();
  const [quantity, setQuantity] = useState(props.quantity);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/${props.id}`;
    axios
      .get(url)
      .then((response) => {
        setItemDetail(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function removeItem() {
    const updatedCart = cart.filter((item) => item !== props.id);
    setCart(updatedCart);
  }

  function handleQuantityBlur(event) {
    const updatedCart = [...cart];
    const itemCount = updatedCart.filter((item) => item === props.id).length;
    const newQuantity = Number(event.target.value);
    const diff = newQuantity - itemCount;
    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        updatedCart.push(props.id);
      }
    } else if (diff < 0) {
      for (let i = 0; i < -diff; i++) {
        const index = updatedCart.findIndex((item) => item === props.id);
        updatedCart.splice(index, 1);
      }
    }
    setCart(updatedCart);
    setQuantity(newQuantity);
  }

  return (
    <div className="CartCard">
      <div className="cartcard-container">
        <img className="cartcard-image" src={itemDetail?.image} />
        <p className="cartcard-title">{itemDetail?.title}</p>
        <p className="tc">€{itemDetail?.price.toFixed(2)}</p>
          <div className="h-align">
            <input
              className="cartcard-quantity"
              type="number"
              value={quantity || ""}
              onInput={(event) => {
                const newValue = Number(event.target.value);
                setQuantity(newValue || "");
              }}
              onBlur={handleQuantityBlur}
            />
          </div>
        <div className="h-align">
          <GoTrashcan className="cartcard-remove" onClick={removeItem} />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
