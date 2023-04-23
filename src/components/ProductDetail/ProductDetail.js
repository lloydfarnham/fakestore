import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './ProductDetail.css';

function ProductDetail () {
    const [productDetail, setProductDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        let url = `https://fakestoreapi.com/products/${id}`;
        axios
          .get(url)
          .then((response) => {
            setProductDetail(response.data);
            console.log(response.data);
          })
          .catch((error) => console.log(error));
      }, []);

    return (    
        <div className="ProductDetail">
            <div className="productdetail-container">
                <img className="productdetail-image" src={productDetail.image}></img>
                <div className="productdetail-details">
                    <h1 className="productdetail-title">{productDetail.title}</h1>
                    <h1 className="productdetail-price">€{productDetail.price}</h1>
                    <h2 className="productdetail-description-title">Description</h2>
                    <p className="productdetail-description">{productDetail.description}</p>
                    <button className="productdetail-button">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
