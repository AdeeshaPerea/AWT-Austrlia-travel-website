import React from 'react';
import DestinationsCarousel from '../components/DestinationsCarousel';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section class="hero">
        <video class="hero-video" autoPlay muted loop playsInline>
          <source src="/image/363061.mp4" type="video/mp4" />
        </video>

        <div class="overlay"></div>

        <div class="hero-content">
          <h1>
            Connecting <br />
            the World <br />
            <span>Through Travel</span>
          </h1>

          <p>
            Connecting people, places and unforgettable journeys around the world.
          </p>

          <div class="buttons">
            <button class="discover">Discover Story</button>
            <button class="watch">Watch Video</button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section class="stats">
        <div class="stat-box">
          <i class="fa-solid fa-award"></i>
          <h2>25+</h2>
          <p>Years of Excellence</p>
        </div>

        <div class="stat-box">
          <i class="fa-solid fa-building"></i>
          <h2>4</h2>
          <p>Specialist Brands</p>
        </div>

        <div class="stat-box">
          <i class="fa-solid fa-location-dot"></i>
          <h2>100+</h2>
          <p>Destinations Worldwide</p>
        </div>

        <div class="stat-box">
          <i class="fa-solid fa-handshake"></i>
          <h2>50+</h2>
          <p>Global Partners</p>
        </div>

        <div class="stat-box">
          <i class="fa-solid fa-users"></i>
          <h2>500K+</h2>
          <p>Happy Travellers</p>
        </div>

        <div class="stat-box">
          <i class="fa-solid fa-headset"></i>
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>
      </section>

      {/* OUR BRANDS */}
      <section class="brands">
        <div class="section-title">
          <h2>Our Brands</h2>
          <p>Explore our collection of specialist travel brands.</p>
        </div>

        <div class="brand-container">
          {/* AWT */}
          <div
            class="brand-card awt"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80')"
            }}
          >
            <div class="brand-logo-top">
              <div class="badge-group">
                <span style={{ background: '#2b7cff' }}>A</span>
                <span style={{ background: '#facc15', color: '#0A2C67' }}>W</span>
                <span style={{ background: '#22c55e' }}>T</span>
              </div>
            </div>

            <div class="brand-content-overlay">
              <h3>Amazing World Travel</h3>
              <p>
                Premium holiday experiences to Asia and beyond, tailor-made for every traveller.
              </p>
              <ul class="check-list">
                <li><span class="check">✓</span> Tailor-made holidays</li>
                <li><span class="check">✓</span> Group tours</li>
                <li><span class="check">✓</span> Honeymoon packages</li>
              </ul>
              <a href="#">Visit Website</a>
            </div>
          </div>

          {/* FLIGHTROO */}
          <div
            class="brand-card flightroo"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&q=80')"
            }}
          >
            <div class="brand-logo-top logo-text">
              <strong>FLIGHTROO</strong>
            </div>

            <div class="brand-content-overlay">
              <h3>Flightroo</h3>
              <p>
                Wholesale airfares and flight booking experts for every kind of traveller.
              </p>
              <ul class="check-list">
                <li><span class="check">✓</span> Domestic &amp; international flights</li>
                <li><span class="check">✓</span> Corporate &amp; group bookings</li>
                <li><span class="check">✓</span> Student fares</li>
              </ul>
              <a href="#">Visit Website</a>
            </div>
          </div>

          {/* TripClub */}
          <div
            class="brand-card tripclub"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80')"
            }}
          >
            <div class="brand-logo-top logo-text" style={{ color: '#7C3AED' }}>
              <strong>TripClub.com</strong>
            </div>

            <div class="brand-content-overlay">
              <h3>TripClub.com</h3>
              <p>
                Your online travel booking companion for flights, hotels and unforgettable tours.
              </p>
              <ul class="check-list">
                <li><span class="check">✓</span> Flights, hotels &amp; packages</li>
                <li><span class="check">✓</span> Tours, activities &amp; transfers</li>
                <li><span class="check">✓</span> Exclusive online deals</li>
              </ul>
              <a href="#">Visit Website</a>
            </div>
          </div>

          {/* Rentaweel */}
          <div
            class="brand-card rentaweel"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&q=80')"
            }}
          >
            <div class="brand-logo-top logo-text" style={{ color: '#F07D1A' }}>
              <strong>rentaweel.com</strong>
            </div>

            <div class="brand-content-overlay">
              <h3>Rentaweel.com</h3>
              <p>
                Car rentals and ground travel solutions wherever your journey takes you.
              </p>
              <ul class="check-list">
                <li><span class="check">✓</span> Wide range of vehicles</li>
                <li><span class="check">✓</span> Airport transfers</li>
                <li><span class="check">✓</span> Chauffeur &amp; guide services</li>
              </ul>
              <a href="#">Visit Website</a>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <DestinationsCarousel />
      <p class="dest-note">*Terms and conditions apply</p>

      {/* TRUST BADGES */}
      <section class="trust-bar">
        <div class="trust-item">
          <i class="fa-solid fa-shield-halved"></i>
          <div>
            <h4>Best Price Guarantee</h4>
            <p>We ensure you get the best value every time.</p>
          </div>
        </div>

        <div class="trust-item">
          <i class="fa-solid fa-headset"></i>
          <div>
            <h4>24/7 Support</h4>
            <p>Our travel experts are always here to help.</p>
          </div>
        </div>

        <div class="trust-item">
          <i class="fa-solid fa-lock"></i>
          <div>
            <h4>Secure Booking</h4>
            <p>Your data is safe with our secure booking system.</p>
          </div>
        </div>

        <div class="trust-item">
          <i class="fa-solid fa-people-group"></i>
          <div>
            <h4>Trusted Network</h4>
            <p>Strong global partnerships you can rely on.</p>
          </div>
        </div>

        <div class="trust-item">
          <i class="fa-regular fa-star"></i>
          <div>
            <h4>Travel Expertise</h4>
            <p>Years of experience you can trust.</p>
          </div>
        </div>

        <div class="trust-item">
          <i class="fa-regular fa-heart"></i>
          <div>
            <h4>Customer First</h4>
            <p>Your satisfaction is our top priority.</p>
          </div>
        </div>
      </section>
    </>
  );
}
