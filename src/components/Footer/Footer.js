import { Link } from 'react-router-dom';
import './Footer.css';

function Footer () {
    
    return (
        <div className="Footer">
            <div className="footer-container">
                <h1>Made with ❤️ by mimo</h1>
                <Link className="nolink" to="/contact"><h1>Contact Us</h1></Link>
            </div>
        </div>
    );
}

export default Footer;