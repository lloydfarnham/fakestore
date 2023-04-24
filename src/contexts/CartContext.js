import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

function CartProvider (props) {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider; 