function Nav() {
    const navItems = [
        {
            url: "/#",
            name: "Home"
        },
        {
            url: "/#",
            name: "About"
        },
        {
            url: "/#",
            name: "Menu"
        },
        {
            url: "/#",
            name: "Reservations"
        },
        {
            url: "/#",
            name: "Order Online"
        },
        {
            url: "/#",
            name: "Login"
        },
    ];

    return (
      <nav className="nav">
        <ul className="nav__list">
            { navItems.map(({url, name}) => (
                <li className="nav__item"><a href={url}>{name}</a></li>
            ))}
        </ul>
      </nav>
    );
}

export default Nav;