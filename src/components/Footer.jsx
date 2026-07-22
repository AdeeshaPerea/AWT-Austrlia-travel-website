import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div class="footer-top">
        <div class="footer-col brand">
          <div class="logo">
            <Link to="/">
              <img src="/image/logo.png" alt="AWTAustralia" className="footer-logo-img" />
            </Link>
          </div>
          <p class="tagline">the travel mantra</p>
          <p class="desc">
            AWT Australia is your complete travel partner for flights, holidays, cars and unforgettable experiences across Australia, New Zealand and the world.
          </p>
        </div>

        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Our Journey</Link></li>
            <li><Link to="/about">Leadership</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/news">Newsroom</Link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Our Brands</h4>
          <ul>
            <li><a href="#">Amazing World Travel</a></li>
            <li><a href="#">FlightRoo</a></li>
            <li><a href="#">TripoClub</a></li>
            <li><a href="#">RentaWheel</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Travel Services</h4>
          <ul>
            <li><a href="#">Flights</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">Car Rentals</a></li>
            <li><a href="#">Travel Insurance</a></li>
            <li><a href="#">Visa Assistance</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Partnerships</h4>
          <ul>
            <li><a href="#">Partner With Us</a></li>
            <li><a href="#">Supplier Partners</a></li>
            <li><a href="#">Corporate Clients</a></li>
            <li><a href="#">Technology Partners</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </div>

        <div class="footer-col contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 7 12 8 12s8-6.6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"/>
              </svg>
              <span>Level 23, Tower 5/727 Collins St, Docklands VIC 3008, Australia</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              <span>1300 589 652</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>info@awtaustralia.com</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm7.9 8h-3.3c-.1-2-.6-3.9-1.4-5.5A8.03 8.03 0 0119.9 10zM12 4.1c1 1.4 1.8 3.5 2 5.9H10c.2-2.4 1-4.5 2-5.9zM4.1 10a8.03 8.03 0 015.7-5.5C9 6.1 8.5 8 8.4 10H4.1zm0 2h4.3c.1 2 .6 3.9 1.4 5.5A8.03 8.03 0 014.1 12zM12 19.9c-1-1.4-1.8-3.5-2-5.9h4c-.2 2.4-1 4.5-2 5.9zm2.2-.4c.8-1.6 1.3-3.5 1.4-5.5h3.3a8.03 8.03 0 01-4.7 5.5z"/>
              </svg>
              <span>www.awtaustralia.com</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.5 0-10 4.5-10 10 0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10s-4.5-10-9.96-10zm0 18.1c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.9-1.4-1.3-2.9-1.3-4.4 0-4.5 3.7-8.2 8.2-8.2 4.5 0 8.2 3.7 8.2 8.2s-3.7 8.1-8.1 8.1z"/>
              </svg>
              <span>+61 1300 589 652</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="social-icons">
          <a href="#" class="facebook" aria-label="Facebook">f</a>
          <a href="#" class="instagram" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1.1.4 2.2.1 1.2.1 1.5.1 4.1s0 3-.1 4.1c0 1.1-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.3-2.2.4-1.2.1-1.5.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.2-.4a3.7 3.7 0 01-1.4-.9 3.7 3.7 0 01-.9-1.4c-.2-.4-.3-1.1-.4-2.2C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.3 2.2-.4C8.1 3 8.4 3 11 3h1zm0 1.8c-2.6 0-2.9 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.7-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.7.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.7.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.7-.3-1.1-.1-1.4-.1-4-.1z"/>
              <path d="M12 7.4a4.6 4.6 0 100 9.2 4.6 4.6 0 000-9.2zm0 7.6a3 3 0 110-6 3 3 0 010 6zM17.8 6.7a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
            </svg>
          </a>
          <a href="#" class="linkedin" aria-label="LinkedIn">in</a>
          <a href="#" class="youtube" aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M8 6h13c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" opacity="0"/>
              <path d="M10 8.6v6.8l6-3.4z" fill="white"/>
            </svg>
          </a>
        </div>

        <div class="legal">
          <span>© 2025 AWT Australia. All Rights Reserved.</span>
          <span class="divider">|</span>
          <a href="#">Privacy Policy</a>
          <span class="divider">|</span>
          <a href="#">Terms of Use</a>
          <span class="divider">|</span>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
