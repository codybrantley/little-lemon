import './Header.css';
import Logo from '../images/Logo.svg';
import Nav from './Nav';

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