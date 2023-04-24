import { Link } from 'react-router-dom';
import './Contact.css';

function Contact () {
    return (    
        <div className="Contact">
            <div className='contact-container'>
                <h1 className="contact-title">Contact Us</h1>
                <div className="contact-form-container">
                    <input className="contact-input" placeholder="First Name"></input>
                    <input className="contact-input" placeholder="Last Name"></input>
                    <textarea className="contact-input contact-message" placeholder="Write your message here"></textarea>
                    <Link to="/"><button className="button contact-submit">Submit</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;
