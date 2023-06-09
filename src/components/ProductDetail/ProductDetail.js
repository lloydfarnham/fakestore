import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import './ProductDetail.css';

function ProductDetail () {
    const [productDetail, setProductDetail] = useState([]);
    const { id } = useParams();
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        let url = `https://fakestoreapi.com/products/${id}`;
        axios
          .get(url)
          .then((response) => {
            setProductDetail(response.data);
          })
          .catch((error) => console.log(error));
      }, []);

    const addToCart = () => {
        const updatedCart = [...cart, id];
        setCart(updatedCart);
    }

    return (    
        <div className="ProductDetail">
            <div className="productdetail-container">
                <img className="productdetail-image" src={productDetail.image}></img>
                <div className="productdetail-details">
                    <h1 className="productdetail-title">{productDetail.title}</h1>
                    <h1 className="productdetail-price">€{productDetail.price ? productDetail.price.toFixed(2) : ''}</h1>
                    <h2 className="productdetail-description-title">Description</h2>
                    <p className="productdetail-description">{productDetail.description}</p>
                    <div className="productdetail-button-container">
                    <button className="button" onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
