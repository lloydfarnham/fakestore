import React, { createContext, useContext, useState } from "react";

export const CartTotalContext = createContext();

function CartTotalProvider (props) {
    const [cartTotal, setCartTotal] = useState();

    return (
        <CartTotalContext.Provider value={{cartTotal, setCartTotal}}>
            {props.children}
        </CartTotalContext.Provider>
    )
}

export default CartTotalProvider; 