import { Link } from 'react-router-dom';
import Nav from '../Nav';
import FooterLogo from '../../images/FooterLogo.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div>
                        <img className="footer__logo" src={FooterLogo} alt="Logo" />
                    </div>
                    <div>
                        <h4>Navigation</h4>
                        <Nav className="footer__links" />
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul className="footer__links">
                            <li>(555) 123-5050</li>
                            <li>contact@littlelemon.com</li>
                            <li>123 Lemon St. Chicago, IL 60106</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Social Media</h4>
                        <ul className="footer__links">
                            <li><Link to="https://instagram.com/">Instagram</Link></li>
                            <li><Link to="https://linkedin.com/">LinkedIn</Link></li>
                            <li><Link to="https://pinterest.com/">Pinterest</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;