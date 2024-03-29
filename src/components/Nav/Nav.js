import { NavLink, Link } from 'react-router-dom'
import './Nav.css'

function Nav(props) {
  const navigationType = props.navigationType === 'header' ? 'header' : 'other'
  const navItems = [
    {
      url: '/',
      name: 'Home',
    },
    {
      url: '/about',
      name: 'About',
    },
    {
      url: '/menu',
      name: 'Menu',
    },
    {
      url: '/reservations',
      name: 'Reservations',
    },
    {
      url: '/order',
      name: 'Order Online',
    },
    {
      url: '/login',
      name: 'Login',
    },
  ]

  if (navigationType === 'header') {
    return (
      <>
        <nav
          className={
            props.isNavExpanded ? 'header__nav_expanded' : 'header__nav'
          }
        >
          <ul className="header__nav_list">
            {navItems.map(({ url, name }) => (
              <li
                key={name}
                className="header__nav_item"
              >
                <NavLink to={url}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </>
    )
  } else {
    return (
      <nav className="nav">
        <ul
          className="nav__list"
          {...props}
        >
          {navItems.map(({ url, name }) => (
            <li
              key={name}
              className="nav__item"
            >
              <Link to={url}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Nav
