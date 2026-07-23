import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Scroll effect for glassmorphic navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navItems = [
    { path: '/', label: 'Home', icon: 'fa-house' },
    { path: '/about', label: 'About', icon: 'fa-circle-info' },
    { path: '/brands', label: 'Brands', icon: 'fa-building-user' },
    { path: '/news', label: 'News', icon: 'fa-newspaper' },
    { path: '/exhibitions', label: 'Exhibitions', icon: 'fa-calendar-days' },
    { path: '/partnerships', label: 'Partnerships', icon: 'fa-handshake' },
    { path: '/team', label: 'Team', icon: 'fa-users' },
    { path: '/careers', label: 'Careers', icon: 'fa-briefcase' },
    { path: '/contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  return (
    <>
      {/* Crystal Glass Backdrop Overlay */}
      <div
        className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`}
        onClick={closeNav}
        aria-hidden="true"
      />

      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <Link to="/" onClick={closeNav}>
            <img src="/image/logo.webp" alt="AWTAustralia" className="logo-img" />
          </Link>
        </div>

        {/* Crystal Glass Navigation Drawer */}
        <nav id="siteNav" ref={siteNavRef} className={isMenuOpen ? 'active' : ''}>
          {/* Drawer Top Header for Mobile */}
          <div className="drawer-header">
            <div className="drawer-logo">
              <Link to="/" onClick={closeNav}>
                <img src="/image/logo.webp" alt="AWTAustralia" className="drawer-logo-img" />
              </Link>
              <span className="drawer-tagline">The Travel Mantra</span>
            </div>
            <button
              className="drawer-close"
              onClick={closeNav}
              aria-label="Close menu"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <span className="link-content">
                    <i className={`fa-solid ${item.icon} nav-icon`}></i>
                    <span>{item.label}</span>
                  </span>
                  <i className="fa-solid fa-chevron-right nav-arrow"></i>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Drawer Footer Actions for Mobile */}
          <div className="drawer-footer">
            <button className="btn btn-drawer">
              <i className="fa-solid fa-handshake"></i> Partner With Us
            </button>
            <div className="drawer-contact">
              <a href="tel:1300589652">
                <i className="fa-solid fa-phone"></i> 1300 589 652
              </a>
              <a href="mailto:info@awtaustralia.com">
                <i className="fa-solid fa-envelope"></i> info@awtaustralia.com
              </a>
            </div>
          </div>
        </nav>

        <div className="nav-right">
          {isContactPage && (
            <a href="tel:1300589652" className="nav-phone">
              <i className="fa-solid fa-phone"></i> 1300 589 652
            </a>
          )}
          <button className="btn">Partner With Us</button>
        </div>

        {/* Crystal Glass Animated Hamburger Button */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
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
    </>
  );
}
