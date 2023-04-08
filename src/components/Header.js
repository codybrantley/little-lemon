import Logo from '../images/Logo.svg';

function Header() {
    return (
      <header>
        <img src={Logo} alt="Little Lemon" />
      </header>
    );
}

export default Header;