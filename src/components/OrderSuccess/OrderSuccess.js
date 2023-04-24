import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { OrderSuccessContext } from "../../contexts/OrderSuccessContext";
import './OrderSuccess.css';

function OrderSuccess () {
    const { cart, setCart } = useContext(CartContext);
    const { order, setOrder } = useContext(OrderSuccessContext);
    
    const handleReturnToMainPage = () => {
        setOrder(false);
        setCart([]);
        window.location.href = "/";
    }
    
    return (
        <div className="ordersuccess-overlay">
        <div className="ordersuccess-container">
            <h1 className="ordersuccess-copy">Your Order was successful!</h1>
            <h1 className="ordersuccess-copy">Check your email for the order confirmation. Thank you for shopping with Fake Store!</h1>
            <button className="ordersuccess-button button" onClick={handleReturnToMainPage}>Return to Main Page</button>
        </div>
      </div>
    );
}

export default OrderSuccess;
