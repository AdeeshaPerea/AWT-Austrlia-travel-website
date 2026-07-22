import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const siteNavRef = useRef(null);
  const menuToggleRef = useRef(null);

  const toggleNav = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsMenuOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    closeNav();
  }, [location.pathname]);

  // Click outside and Escape key listeners
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        siteNavRef.current &&
        !siteNavRef.current.contains(e.target) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(e.target)
      ) {
        closeNav();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeNav();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const isContactPage = location.pathname === '/contact';

  return (
    <header class="navbar">
      <div class="logo">
        <NavLink to="/" onClick={closeNav}>
          <h2>AWTAustralia</h2>
          {isContactPage && <span class="logo-tagline">the travel mantra</span>}
        </NavLink>
      </div>

      <nav id="siteNav" ref={siteNavRef} className={isMenuOpen ? 'active' : ''}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/brands" className={({ isActive }) => (isActive ? 'active' : '')}>
              Brands
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : '')}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/exhibitions" className={({ isActive }) => (isActive ? 'active' : '')}>
              Exhibitions
            </NavLink>
          </li>
          <li>
            <NavLink to="/partnerships" className={({ isActive }) => (isActive ? 'active' : '')}>
              Partnerships
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className={({ isActive }) => (isActive ? 'active' : '')}>
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" className={({ isActive }) => (isActive ? 'active' : '')}>
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div class="nav-right">
        {isContactPage && (
          <a href="tel:1300589652" class="nav-phone">
            <i class="fa-solid fa-phone"></i> 1300 589 652
          </a>
        )}
        <button class="btn">Partner With Us</button>
      </div>

      <button
        class="menu-toggle"
        id="menuToggle"
        ref={menuToggleRef}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen ? 'true' : 'false'}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
