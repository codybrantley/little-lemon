import { useState } from 'react'
import Nav from '../Nav'
import Logo from '../../images/Logo.svg'
import './Header.css'

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div>
            <img
              className="header__logo"
              src={Logo}
              alt="Little Lemon"
            />
            <input
              type="checkbox"
              id="menu_checkbox"
            />
            <label
              className="header__hamburger"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}
              for="menu_checkbox"
            >
              <div></div>
              <div></div>
              <div></div>
            </label>
          </div>
          <div>
            <Nav
              navigationType="header"
              isNavExpanded={isNavExpanded}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
