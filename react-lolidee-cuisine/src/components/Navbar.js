import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { getCartCount } = useCart();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="/images/logo.jpg" className="img" alt="Lolidee's Cuisine Logo" />
        </Link>
        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsActive(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link" onClick={() => setIsActive(false)}>Our Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link" onClick={() => setIsActive(false)}>
              Cart {getCartCount() > 0 && `(${getCartCount()})`}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsActive(false)}>About us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsActive(false)}>Contact us</Link>
          </li>
        </ul>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

