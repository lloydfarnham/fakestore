import React, { createContext, useContext, useState } from "react";

export const OrderSuccessContext = createContext();

function OrderSuccessProvider (props) {
    const [ order, setOrder ] = useState(false);

    return (
        <OrderSuccessContext.Provider value={{order, setOrder}}>
            {props.children}
        </OrderSuccessContext.Provider>
    )
}

export default OrderSuccessProvider; 