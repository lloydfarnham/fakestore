import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import ListCard from "../ListCard/ListCard";
import './ProductList.css';

function ProductList () {
    const categoryApi = "https://fakestoreapi.com/products/categories"
    const [categoryList, setCategoryList] = useState([])
    const [productList, setProductList] = useState([]);
    const location = useLocation();

    const capitalize = (string) => {return string.charAt(0).toUpperCase() + string.slice(1)}

    useEffect(() => {
        axios
          .get(categoryApi)
          .then((response) => {
            setCategoryList(response.data);
          })
          .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        let url = "https://fakestoreapi.com/products";
        const searchParams = new URLSearchParams(location.search);
        const category = searchParams.get("category");
        if (category) {
          url += `/category/${category}`;
        }
        axios
          .get(url)
          .then((response) => {
            setProductList(response.data);
          })
          .catch((error) => console.log(error));
      }, [location.search]);

    const isActive = (category) => {
        const searchParams = new URLSearchParams(location.search);
        const activeCategory = searchParams.get("category");
        return !activeCategory && category === "all" || activeCategory === category;
    };

    return (
        <div className="ProductList">
            <ul className="productlist-categories">
                <li>
                    <Link to="/" className={`hover-underline-animation nolink shrink ${isActive("all") ? "bold" : ""}`}>All</Link>
                </li>
                {categoryList.map((category) => (
                    <li key={category}>
                        <Link to={`${location.pathname}?category=${category}`} className={`hover-underline-animation nolink shrink ${isActive(category) ? "bold" : ""}`}>
                            {capitalize(category)}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="productlist-grid">
                {productList.map((productList) => (
                    <ListCard {...productList}/>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
