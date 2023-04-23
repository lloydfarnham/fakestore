import { AiOutlineShoppingCart } from "react-icons/ai";
import './Nav.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Nav () {
    const { cart, SetCart } = useContext(CartContext);
    
    return (
        <div className="nav">
            <Link to="/" className="nolink"><h1 className="nav-logo noselect">Fake Store</h1></Link>
            <Link to="/cart"> 
                <div className="nav-cart-container">
                    <AiOutlineShoppingCart className="nav-cart-icon"/>
                    {cart.length > 0 ? (
                    <div className="nav-cart-count noselect">{cart.length}</div>
                    ) : (
                    <span></span>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default Nav;