import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import { useAppContext } from './context'

const Navbar = () => {
  const { setShowSubmenu, openSidebar, openSubmenu } = useAppContext();

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Strapi"/>
          <button type="button" className="btn toggle-btn" onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map( elem => {
            return (
              <li onMouseEnter={() => {setShowSubmenu(true);openSubmenu(elem.page,elem.links)}} onMouseOut={() => {setShowSubmenu(false)}}>
                <button type="button" className="link-btn">{elem.page}</button>
              </li>
            )
          })}
        </ul>
        <button type="button" className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
