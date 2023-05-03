import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import axios from "axios";
import "./CartCard.css";
import { GoTrashcan } from "react-icons/go";

function CartCard(props) {
  const [itemDetail, setItemDetail] = useState();
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
    const newCart = cart.filter((item) => item !== props.id);
    setCart(newCart);
  }

  return (
    <div className="CartCard">
      <div className="cartcard-container">
        <img className="cartcard-image" src={itemDetail?.image} />
        <p className="cartcard-title">{itemDetail?.title}</p>
        <p className="tc">€{itemDetail?.price.toFixed(2)}</p>
          <p className="tc">{props.quantity}</p>
          <div className="h-align">
              <GoTrashcan className="cartcard-remove" onClick={removeItem} />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
