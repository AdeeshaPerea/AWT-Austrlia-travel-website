import React, { useState, useEffect } from 'react';
import '../styles/team.css';

export default function Team() {
  const [subscribeEmail, setSubscribeEmail] = useState('');

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (!subscribeEmail || !subscribeEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    alert(`Thank you for subscribing to AWT Australia updates!`);
    setSubscribeEmail('');
  };

  return (
    <div className="team-page">
      {/* --- Hero Banner --- */}
      <section className="team-hero">
        <div className="team-hero-overlay"></div>
        <div className="team-hero-container">
          <div className="team-hero-content">
            <h1 className="team-hero-title">Our Team</h1>
            <h2 className="team-hero-subtitle">
              Passionate People. Global Vision.
            </h2>
            <div className="team-hero-red-line"></div>
            <div className="team-hero-paragraphs">
              <p>
                At AWT Australia, our people are the driving force behind every successful journey.
                Our diverse team of travel professionals brings together extensive industry expertise,
                local knowledge and a shared commitment to delivering exceptional customer experiences.
              </p>
              <p>
                From travel consultants and operations specialists to technology experts,
                marketing professionals and business development leaders, every member of our team
                plays a vital role in helping clients explore the world with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <div className="team-main-container">

        {/* Executive Chairman Spotlight Message Section */}
        <section className="executive-message-section reveal">
          <span className="exec-header-badge">EXECUTIVE LEADERSHIP</span>
          <h2>A Message from Glen Fernando</h2>
          <div className="exec-subtitle-role">
            <i className="fa-solid fa-user-tie"></i> Founder & Chairman — AWT Australia
          </div>

          <div className="exec-card-grid">
            {/* Left: Glen Fernando Portrait */}
            <div className="exec-portrait-column">
              <div className="exec-portrait-frame">
                <img
                  src="/image/team_glen_fernando.webp"
                  alt="Glen Fernando - Founder & Chairman"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="exec-badge-tag">FOUNDER & CHAIRMAN</span>
              <div className="exec-name-title">
                <h4>Glen Fernando</h4>
                <p>AWT Australia</p>
              </div>
            </div>

            {/* Right: Message Body */}
            <div className="exec-quote-body">
              <div className="exec-quote-icon">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <div className="exec-quote-text">
                <p>
                  “At AWT Australia, we believe travel has the power to connect people,
                  cultures and opportunities. Every destination we help our clients reach is built
                  on trust, innovation and the dedication of an exceptional team.”
                </p>
                <p>
                  “Our vision is to create one of the most respected and forward-thinking travel
                  groups in the region by combining outstanding customer service, strategic global
                  partnerships and innovative technology.”
                </p>
                <p>
                  “I am incredibly proud of our team. Their passion, professionalism and commitment
                  to excellence inspire everything we do. Together, we continue to grow, embrace
                  new opportunities and build meaningful relationships with our clients and partners
                  around the world.”
                </p>
                <p>
                  “As we look to the future, our commitment remains unchanged—to deliver exceptional
                  travel experiences, create lasting value and continue connecting the world through travel.”
                </p>
                <p>
                  “Thank you for being part of our journey.”
                </p>
              </div>

              <div className="exec-signature-block">
                <div>
                  <h5 className="signature-name">Glen Fernando</h5>
                  <p className="signature-role">Founder & Chairman, AWT Australia</p>
                </div>
                <div style={{ color: '#00b4d8', fontSize: '1.2rem' }}>
                  <i className="fa-solid fa-award"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our People & Culture Section */}
        <section className="team-culture-section reveal" style={{ '--reveal-delay': '0.15s' }}>
          <div className="culture-header">
            <span className="exec-header-badge">OUR PEOPLE & CULTURE</span>
            <h2>Driven by People, United by Passion</h2>
            <p>
              Collaboration, innovation and integrity are at the heart of our culture.
              Together, we work to build strong partnerships, embrace new technologies and create
              seamless travel experiences across Australia, New Zealand and international markets.
              Our people don’t just plan journeys—they build lasting relationships and unforgettable experiences.
            </p>
          </div>

          {/* Team Group Photo Display */}
          <div className="group-photo-wrap reveal" style={{ '--reveal-delay': '0.2s' }}>
            <img
              src="/image/team_group_photo.webp"
              alt="AWT Australia Corporate Team"
              loading="lazy"
              decoding="async"
            />
            <div className="group-photo-caption">
              <div>
                <h4>AWT Australia Team Showcase</h4>
                <p>Australia & New Zealand Travel Operations & Leadership Team</p>
              </div>
              <div style={{ fontSize: '1.4rem', color: '#00b4d8' }}>
                <i className="fa-solid fa-people-group"></i>
              </div>
            </div>
          </div>

          {/* 4 Core Culture Values Grid */}
          <div className="culture-values-grid">
            <div className="culture-value-card reveal" style={{ '--reveal-delay': '0.1s' }}>
              <div className="cv-icon">
                <i className="fa-solid fa-handshake-angle"></i>
              </div>
              <h4>Collaboration</h4>
              <p>Together, we work to build strong partnerships and create seamless travel experiences.</p>
            </div>

            <div className="culture-value-card reveal" style={{ '--reveal-delay': '0.2s' }}>
              <div className="cv-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h4>Innovation</h4>
              <p>Embracing new technologies and smart digital booking systems to transform modern travel.</p>
            </div>

            <div className="culture-value-card reveal" style={{ '--reveal-delay': '0.3s' }}>
              <div className="cv-icon">
                <i className="fa-solid fa-shield-heart"></i>
              </div>
              <h4>Integrity</h4>
              <p>Building lasting relationships and trust across Australia, New Zealand, and global markets.</p>
            </div>

            <div className="culture-value-card reveal" style={{ '--reveal-delay': '0.4s' }}>
              <div className="cv-icon">
                <i className="fa-solid fa-star"></i>
              </div>
              <h4>Excellence</h4>
              <p>Our people don’t just plan journeys—they build unforgettable experiences for our clients.</p>
            </div>
          </div>
        </section>

        {/* Bottom Newsletter Signup Bar */}
        <div className="bar reveal" style={{ '--reveal-delay': '0.2s' }}>
          <svg className="icon-plane" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <div className="text">
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter and stay updated with AWT Australia.</p>
          </div>

          <form className="form" onSubmit={handleSubscribeSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          <svg className="icon-plane-outline" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>
    </div>
  );
}
