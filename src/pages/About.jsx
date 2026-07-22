import React from 'react';
import EventsCarousel from '../components/EventsCarousel';

export default function About() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <>
      {/* About Hero Section */}
      <section class="about-hero">
        <div class="about-hero-content">
          <h1>About Us</h1>
          <h2 class="about-subtitle">
            A Global Travel Group<br />
            Built on Passion. Driven by Innovation.
          </h2>
          <p>
            For over 25 years, AWT Australia has been connecting people, places and possibilities across the world.
          </p>
          <div class="buttons">
            <button class="discover">OUR STORY</button>
            <button class="watch">
              <i class="fa-solid fa-play"></i> WATCH OUR STORY
            </button>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section class="mission-vision-values">
        <div class="mvv-card">
          {/* Our Mission */}
          <div class="mvv-col mission-col">
            <div class="mvv-head">
              <div class="mvv-icon" aria-hidden="true">
                <i class="fa-solid fa-bullseye"></i>
              </div>
              <div class="mvv-heading">
                <h3>Our Mission</h3>
                <span class="mvv-underline"></span>
              </div>
            </div>
            <p>
              To make travel easier, smarter and more meaningful by delivering exceptional service, value and unforgettable experiences.
            </p>
            <a href="#">
              READ MORE <span class="sr-only">about our mission</span>
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Our Vision */}
          <div class="mvv-col vision-col">
            <div class="mvv-head">
              <div class="mvv-icon" aria-hidden="true">
                <i class="fa-solid fa-eye"></i>
              </div>
              <div class="mvv-heading">
                <h3>Our Vision</h3>
                <span class="mvv-underline"></span>
              </div>
            </div>
            <p>
              To be the most trusted and admired travel group, connecting people with the world and enriching lives through travel.
            </p>
            <a href="#">
              READ MORE <span class="sr-only">about our vision</span>
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Our Values */}
          <div class="mvv-col values-col">
            <div class="mvv-head">
              <div class="mvv-icon" aria-hidden="true">
                <i class="fa-solid fa-gem"></i>
              </div>
              <div class="mvv-heading">
                <h3>Our Values</h3>
                <span class="mvv-underline"></span>
              </div>
            </div>
            <div class="values-columns">
              <div class="values-sub">
                <div class="value-item">
                  <span class="value-icon" aria-hidden="true">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <div>
                    <h4>Integrity</h4>
                    <p>We do what's right, always.</p>
                  </div>
                </div>
                <div class="value-item">
                  <span class="value-icon" aria-hidden="true">
                    <i class="fa-solid fa-shield-halved"></i>
                  </span>
                  <div>
                    <h4>Excellence</h4>
                    <p>We are committed to the highest standards.</p>
                  </div>
                </div>
                <div class="value-item">
                  <span class="value-icon" aria-hidden="true">
                    <i class="fa-solid fa-lightbulb"></i>
                  </span>
                  <div>
                    <h4>Innovation</h4>
                    <p>We embrace change and create new possibilities.</p>
                  </div>
                </div>
              </div>
              <div class="values-sub">
                <div class="value-item">
                  <span class="value-icon" aria-hidden="true">
                    <i class="fa-solid fa-heart"></i>
                  </span>
                  <div>
                    <h4>Customer First</h4>
                    <p>Your satisfaction is our top priority.</p>
                  </div>
                </div>
                <div class="value-item">
                  <span class="value-icon" aria-hidden="true">
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <div>
                    <h4>Passion</h4>
                    <p>We love what we do and it shows.</p>
                  </div>
                </div>
                <div class="value-item">
                  <span class="value-icon" aria-hidden="true">
                    <i class="fa-solid fa-people-group"></i>
                  </span>
                  <div>
                    <h4>Teamwork</h4>
                    <p>Stronger together for greater success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section class="journey-timeline">
        <div class="journey-container">
          <div class="journey-header">
            <div>
              <h2>Our Journey</h2>
              <p>A journey of growth, trust and global connections.</p>
            </div>
            <a href="#" class="view-timeline-btn">VIEW FULL TIMELINE</a>
          </div>

          <ol class="timeline">
            <li class="timeline-item">
              <div class="timeline-icon" aria-hidden="true">
                <i class="fa-solid fa-rocket"></i>
              </div>
              <div class="timeline-year">1998</div>
              <div class="timeline-text">
                <p>Company Established</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-icon" aria-hidden="true">
                <i class="fa-solid fa-building"></i>
              </div>
              <div class="timeline-year">2002</div>
              <div class="timeline-text">
                <p>Expansion in Australia</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-icon" aria-hidden="true">
                <i class="fa-solid fa-flag"></i>
              </div>
              <div class="timeline-year">2006</div>
              <div class="timeline-text">
                <p>New Zealand Operations</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-icon" aria-hidden="true">
                <i class="fa-solid fa-laptop"></i>
              </div>
              <div class="timeline-year">2012</div>
              <div class="timeline-text">
                <p>Travel Technology Innovation</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-icon" aria-hidden="true">
                <i class="fa-solid fa-plane"></i>
              </div>
              <div class="timeline-year">2016</div>
              <div class="timeline-text">
                <p>Launched FlightRoo</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-icon" aria-hidden="true">
                <i class="fa-solid fa-globe"></i>
              </div>
              <div class="timeline-year">2019</div>
              <div class="timeline-text">
                <p>TripClub Platform Live</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-icon" aria-hidden="true">
                <i class="fa-solid fa-car"></i>
              </div>
              <div class="timeline-year">2021</div>
              <div class="timeline-text">
                <p>RentaWheel Launched</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-icon" aria-hidden="true">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <div class="timeline-year">2024+</div>
              <div class="timeline-text">
                <p>Global Growth Continues</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Events & News */}
      <section class="events-news-section">
        {/* LEFT */}
        <div class="events-wrapper">
          <div class="section-top">
            <div>
              <h2>Exhibitions &amp; Events</h2>
              <p>Where we meet the world.</p>
            </div>
            <a href="#" class="view-btn">VIEW ALL EVENTS</a>
          </div>
          <EventsCarousel />
        </div>

        {/* RIGHT */}
        <div class="news-wrapper">
          <div class="section-top">
            <div>
              <h2>News &amp; Insights</h2>
              <p>Stay updated with the latest travel news, trends and industry insights.</p>
            </div>
            <a href="#" class="view-btn">VIEW ALL NEWS</a>
          </div>

          <div class="news-list">
            <div class="news-item">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
                alt="Airline News"
              />
              <div class="news-text">
                <span class="tag airline">AIRLINE NEWS</span>
                <h3>New Routes and Airline Updates This May</h3>
                <p>May 10, 2025</p>
              </div>
            </div>

            <div class="news-item">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80"
                alt="Travel Trends"
              />
              <div class="news-text">
                <span class="tag travel">TRAVEL TRENDS</span>
                <h3>Top 10 Emerging Destinations to Visit in 2025</h3>
                <p>May 8, 2025</p>
              </div>
            </div>

            <div class="news-item">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80"
                alt="Industry News"
              />
              <div class="news-text">
                <span class="tag industry">INDUSTRY NEWS</span>
                <h3>The Rise of Sustainable Tourism in Asia</h3>
                <p>May 6, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section class="partners-section">
        <div class="container">
          <div class="partners-header">
            <div>
              <h2>Our Global Partners</h2>
              <p>We collaborate with the best in the industry to deliver exceptional travel experiences.</p>
            </div>
            <a href="#" class="view-btn">VIEW ALL PARTNERS</a>
          </div>

          <div class="partners-grid">
            <div class="partner-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Qatar_Airways_logo.svg" alt="Qatar Airways" />
            </div>
            <div class="partner-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg" alt="Emirates" />
            </div>
            <div class="partner-logo">
              <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/Singapore_Airlines_Logo_2.svg" alt="Singapore Airlines" />
            </div>
            <div class="partner-logo">
              <img src="https://upload.wikimedia.org/wikipedia/en/1/13/Malaysia_Airlines_Logo.svg" alt="Malaysia Airlines" />
            </div>
            <div class="partner-logo">
              <img src="https://group-accor.imgix.net/https%3A%2F%2Fimages.group.accor.com%2Fyrj0orc8tx24%2F7AvkRurt3J3B5kzDA6r9SS%2F0979bd2c6c093a3fd4dfc33c3dd8ca8a%2Flogo.svg?ixlib=js-3.8.0&w=480&q=100&auto=format&fit=crop&crop=focalpoint&s=f00baadbc4469335931a337ea8319032" alt="Accor" />
            </div>
            <div class="partner-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Marriott_International.svg" alt="Marriott" />
            </div>
            <div class="partner-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/AVIS_logo_2012.svg" alt="Avis" />
            </div>
            <div class="partner-logo">
              <img src="https://developers.amadeus.com/assets/images/wordmark/Amadeus-Logo.svg" alt="Amadeus" />
            </div>
            <div class="partner-logo more-partners">
              <p>and 50+<br />More</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA SECTION */}
      <section class="newsletter-section">
        <div class="newsletter-content">
          <div class="newsletter-left">
            <h2>Let's Build the Future of Travel Together</h2>
            <p>Partner with AWT Australia and be part of a global travel network built on trust, innovation and shared success.</p>

            <form class="newsletter-form" onSubmit={handleSubscribe}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" class="subscribe-btn">SUBSCRIBE</button>
            </form>

            <div class="newsletter-benefits">
              <div class="benefit">
                <i class="fa-solid fa-gift"></i>
                <span>Exclusive Offers</span>
              </div>
              <div class="benefit">
                <i class="fa-solid fa-lightbulb"></i>
                <span>Travel Inspiration</span>
              </div>
              <div class="benefit">
                <i class="fa-solid fa-chart-line"></i>
                <span>Industry Insights</span>
              </div>
              <div class="benefit">
                <i class="fa-solid fa-handshake"></i>
                <span>Partner Updates</span>
              </div>
            </div>
          </div>

          <div class="newsletter-right">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Travel" />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section class="stats-section">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-card">
              <i class="fa-solid fa-award"></i>
              <h3>25+</h3>
              <p>Years of Excellence</p>
            </div>
            <div class="stat-card">
              <i class="fa-solid fa-building"></i>
              <h3>4</h3>
              <p>Specialist Brands</p>
            </div>
            <div class="stat-card">
              <i class="fa-solid fa-map-location-dot"></i>
              <h3>100+</h3>
              <p>Destinations Worldwide</p>
            </div>
            <div class="stat-card">
              <i class="fa-solid fa-handshake"></i>
              <h3>50+</h3>
              <p>Global Partners</p>
            </div>
            <div class="stat-card">
              <i class="fa-solid fa-users"></i>
              <h3>500K+</h3>
              <p>Happy Travellers</p>
            </div>
            <div class="stat-card">
              <i class="fa-solid fa-headset"></i>
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
