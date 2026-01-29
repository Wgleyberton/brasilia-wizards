import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Inicío' },
    { path: '/history', label: 'História' },
    { path: '/american-football', label: 'Futebol Americano' },
    { path: '/flag-football', label: 'Flag Football' },
    { path: '/esports', label: 'E-sports' },
    { path: '/sponsors', label: 'Patrocinadores' },
    { path: '/Announcements', label: 'Seletiva' },
    
  ];

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon"></div>
          <div className="logo-text">
            Brasília <span>Wizards</span>
          </div>
        </NavLink>

        <button
          className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
