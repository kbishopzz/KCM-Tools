// Top navigation bar with links, search, and cart icon
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';
import BrandLogo from '../assets/Images/BrandLogo.png';
import './Navbar.css';

export default function Navbar() {
  const { getCartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={BrandLogo} alt="KCM Tools" className="brand-logo" />
          </Link>
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <SearchBar />
        <Link to="/cart" className="cart-link" aria-label="Shopping cart">
          <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {getCartCount() > 0 && (
            <span className="cart-badge">{getCartCount()}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
