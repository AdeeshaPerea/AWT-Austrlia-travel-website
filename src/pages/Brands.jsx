import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/brands.css';

export default function Brands() {
  const navigate = useNavigate();

  const brandList = [
    {
      id: 'awt',
      name: 'Amazing World Travels',
      tagline: 'Dream | Explore | Live',
      logo: '/image/brand_awt_logo.webp',
      image: '/image/sustainability_mountain_peak.webp',
      description: 'Full-service leisure, corporate and group travel solutions. We turn your travel plans into unforgettable experiences with personalised service and global reach.',
      linkText: 'Learn More'
    },
    {
      id: 'flightroo',
      name: 'FlightRoo',
      tagline: 'WHOLESALE AIR FARES AND RETAIL FLIGHTS',
      logo: '/image/brand_flightroo_logo.webp',
      image: '/image/global_travel_airplane.webp',
      description: 'Wholesale air fares and retail flight booking centres across Australia. Providing competitive fares and reliable service for all your flight needs.',
      linkText: 'Learn More'
    },
    {
      id: 'tripoclub',
      name: 'TripoClub',
      tagline: 'ONLINE BOOKING SYSTEM',
      logo: '/image/Tripoclub.webp',
      image: '/image/image-1.webp',
      description: 'A smart online booking platform for flights, hotels and holiday packages. Easy, secure and designed for the modern traveller.',
      linkText: 'Learn More'
    },
    {
      id: 'rentawheel',
      name: 'Rentawheel',
      tagline: 'Drive Your Way',
      logo: '/image/brand_rentawheel_logo.webp',
      image: '/image/rentawheel_car.webp',
      description: 'Convenient vehicle rental solutions for business and leisure travellers. Quality vehicles, flexible plans and service you can depend on.',
      linkText: 'Learn More'
    }
  ];

  const handleExploreClick = () => {
    const section = document.getElementById('our-travel-brands');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="brands-page">
      {/* --- Brands Hero Section (Consistent Dark Navy Theme like About & News pages) --- */}
      <section className="brands-hero">
        <div className="brands-hero-overlay"></div>
        <div className="brands-hero-container">
          <div className="brands-hero-content">
            <h1 className="brands-hero-title">Our Brands</h1>
            <h2 className="brands-hero-subtitle">
              Connecting the World <br />
              Through Travel
            </h2>
            <div className="brands-hero-red-line"></div>
            <div className="brands-hero-paragraphs">
              <p>
                AWT Australia is a leading travel group with a portfolio of innovative brands
                delivering complete travel solutions across Australia, New Zealand and the world.
              </p>
              <p>
                From wholesale flight management to AI online booking engines and vehicle rental fleets,
                our brands make every journey seamless and memorable.
              </p>
            </div>
            <div className="brands-hero-buttons">
              <button className="btn-explore-brands" onClick={handleExploreClick}>
                EXPLORE OUR BRANDS
              </button>
              <button className="btn-contact-brands" onClick={() => navigate('/contact')}>
                <i className="fa-solid fa-paper-plane"></i> CONTACT US
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <div className="brands-main-container" id="our-travel-brands">
        {/* Section Header */}
        <div className="brands-section-header">
          <span className="brands-header-badge">OUR BRANDS</span>
          <h2>Our Travel Brands</h2>
          <p>
            AWT Group brings together a powerful portfolio of trusted travel brands.
            Each brand is built with a unique purpose to make your travel experience seamless,
            convenient and unforgettable.
          </p>
        </div>

        {/* 4-Column Brand Cards Grid */}
        <div className="brands-cards-grid">
          {brandList.map((b) => (
            <div key={b.id} className="brand-showcase-card">
              <div className="bsc-img-wrap">
                <img src={b.image} alt={b.name} loading="lazy" decoding="async" />
              </div>
              <div className="bsc-body">
                <div className="bsc-logo-badge">
                  <img
                    src={b.logo}
                    alt={b.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="brand-badge-fallback" style={{ display: 'none' }}>
                    <i className="fa-solid fa-compass"></i>
                    <span>{b.name}</span>
                  </div>
                </div>
                <h3>{b.name}</h3>
                <p>{b.description}</p>
                <a
                  className="bsc-learn-link"
                  onClick={() => navigate('/contact')}
                >
                  {b.linkText} <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Highlights Bar (5 Items) */}
        <div className="value-props-bar">
          <div className="vp-item">
            <div className="vp-icon-circle">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="vp-text">
              <h4>Global Network</h4>
              <p>Strong presence in Australia, New Zealand and worldwide.</p>
            </div>
          </div>

          <div className="vp-item">
            <div className="vp-icon-circle">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="vp-text">
              <h4>Trusted Partners</h4>
              <p>We work with leading airlines, hotels and travel partners.</p>
            </div>
          </div>

          <div className="vp-item">
            <div className="vp-icon-circle">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div className="vp-text">
              <h4>Reliable Service</h4>
              <p>Commitment to quality, safety and customer care.</p>
            </div>
          </div>

          <div className="vp-item">
            <div className="vp-icon-circle">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <div className="vp-text">
              <h4>Innovative Solutions</h4>
              <p>Technology driven solutions for a seamless experience.</p>
            </div>
          </div>

          <div className="vp-item">
            <div className="vp-icon-circle">
              <i className="fa-solid fa-headset"></i>
            </div>
            <div className="vp-text">
              <h4>24/7 Support</h4>
              <p>Our team is here to support you anytime, anywhere.</p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="brands-bottom-banner">
          <div className="bbb-content">
            <div className="bbb-left">
              <h3>
                One Group. Multiple Brands.
                <span>Endless Travel Possibilities.</span>
              </h3>
            </div>
            <p className="bbb-desc">
              Whether you are travelling for business or leisure, our brands are here to make
              every journey smoother, smarter and more memorable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
