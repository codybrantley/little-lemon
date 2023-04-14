import Nav from '../Nav';
import Logo from '../../images/Logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div>
                        <img className="header__logo" src={Logo} alt="Little Lemon" />
                    </div>
                    <div>
                        <Nav navigationType="header" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;