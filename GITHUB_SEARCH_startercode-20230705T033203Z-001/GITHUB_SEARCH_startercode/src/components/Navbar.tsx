import React from 'react'
import './navbar.css'
import logo from '../assests/logo_git.png'
import { Link } from 'react-router-dom'
const Navbar: React.FC<{}> = () => {
  return (
      <nav className='navbar'>
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
  )
}
export default Navbar
