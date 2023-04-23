import { AiOutlineShoppingCart } from "react-icons/ai";
import './Nav.css';
import { Link } from "react-router-dom";

function Nav () {
    
    return (
        <div className="nav">
            <Link to="/" className="nolink"><h1 className="nav-logo noselect">Fake Store</h1></Link>
            <div className="nav-cart-container">
                <AiOutlineShoppingCart className="nav-cart-icon"/>
                <div className="nav-cart-count noselect">1</div>
            </div>
        </div>
    );
}

export default Nav;