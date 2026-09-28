import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-icon">✚</span>
          <span className="brand-text">CampusCare</span>
        </Link>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/doctors" 
              className={isActive('/doctors') ? 'active' : ''}
              onClick={closeMenu}
            >
              Doctors
            </Link>
          </li>
          <li>
            <Link 
              to="/appointments" 
              className={isActive('/appointments') ? 'active' : ''}
              onClick={closeMenu}
            >
              Appointments
            </Link>
          </li>
          <li className="navbar-cta">
            <Link 
              to="/doctors" 
              className="cta-button"
              onClick={closeMenu}
            >
              Find a Doctor
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
