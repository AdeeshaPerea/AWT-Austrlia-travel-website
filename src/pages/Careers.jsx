import React, { useState, useEffect } from 'react';
import '../styles/careers.css';

export default function Careers() {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantForm, setApplicantForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });

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
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToOpps = () => {
    const section = document.getElementById('current-opportunities');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (!subscribeEmail || !subscribeEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    alert(`Thank you for subscribing to AWT Australia career updates!`);
    setSubscribeEmail('');
  };

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${applicantForm.fullName}! Your application for "${selectedJob}" has been submitted successfully. Our HR team will reach out to you soon.`);
    setSelectedJob(null);
    setApplicantForm({ fullName: '', email: '', phone: '', notes: '' });
  };

  const whyJoinList = [
    {
      icon: 'fa-globe',
      title: 'International Group',
      desc: 'Be part of a growing international travel group across global markets.'
    },
    {
      icon: 'fa-plane',
      title: 'Exciting Opportunities',
      desc: 'Exciting career opportunities across Australia, New Zealand and Asia.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Professional Growth',
      desc: 'Professional development, continuous learning and ongoing training.'
    },
    {
      icon: 'fa-handshake-angle',
      title: 'Inclusive Workplace',
      desc: 'Supportive, collaborative and inclusive workplace culture.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Travel Tech Innovation',
      desc: 'Work with innovative travel technology and smart digital platforms.'
    },
    {
      icon: 'fa-bullseye',
      title: 'Career Progression',
      desc: 'Performance recognition, leadership pathways and career progression.'
    },
    {
      icon: 'fa-palmtree',
      title: 'Travel Industry Benefits',
      desc: 'Exclusive travel industry benefits and familiarisation opportunities.'
    },
    {
      icon: 'fa-heart',
      title: 'Culture of Excellence',
      desc: 'A vibrant culture built on integrity, teamwork and excellence.'
    }
  ];

  const jobOpenings = [
    { title: 'Travel Consultants', type: 'Full-Time / Hybrid', location: 'Melbourne / Sydney', icon: 'fa-suitcase-rolling' },
    { title: 'Corporate Travel Advisors', type: 'Full-Time', location: 'Auckland / Melbourne', icon: 'fa-user-tie' },
    { title: 'Business Development Managers', type: 'Full-Time', location: 'Melbourne / Remote', icon: 'fa-briefcase' },
    { title: 'Digital Marketing Specialists', type: 'Full-Time', location: 'Melbourne / Colombo', icon: 'fa-bullhorn' },
    { title: 'Customer Experience Consultants', type: 'Full-Time / Shifts', location: '24/7 Support Hub', icon: 'fa-headset' },
    { title: 'Reservations & Ticketing Specialists', type: 'Full-Time', location: 'Auckland / Melbourne', icon: 'fa-ticket' },
    { title: 'Operations Coordinators', type: 'Full-Time', location: 'Melbourne', icon: 'fa-gear' },
    { title: 'Technology & Software Professionals', type: 'Full-Time / Hybrid', location: 'Melbourne / Remote', icon: 'fa-laptop-code' },
    { title: 'Finance & Administration', type: 'Full-Time', location: 'Melbourne / Auckland', icon: 'fa-calculator' },
    { title: 'Graduate & Internship Programs', type: 'Intake 2025 / 2026', location: 'All Locations', icon: 'fa-graduation-cap' }
  ];

  return (
    <div className="careers-page">
      {/* --- Hero Banner --- */}
      <section className="careers-hero">
        <div className="careers-hero-overlay"></div>
        <div className="careers-hero-container">
          <div className="careers-hero-content">
            <span className="careers-hero-tag">CAREERS AT AWT AUSTRALIA</span>
            <h1 className="careers-hero-title">Build Your Career.</h1>
            <h2 className="careers-hero-subtitle">Explore the World.</h2>
            <div className="careers-hero-red-line"></div>
            <div className="careers-hero-paragraphs">
              <p>
                At AWT Australia, we believe our people are our greatest strength.
                We’re building a team of passionate, innovative and customer-focused professionals
                who are excited to shape the future of travel.
              </p>
              <p>
                Whether you’re an experienced travel consultant, a technology specialist,
                a marketing expert or just starting your career, you’ll find opportunities to learn,
                grow and make a real impact.
              </p>
            </div>
            <button className="btn-hero-opps" onClick={scrollToOpps}>
              View Current Opportunities <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </section>

      {/* --- Main Content Container --- */}
      <div className="careers-main-container">

        {/* Section 1: Why Join AWT Australia? */}
        <section className="why-join-section reveal">
          <div className="careers-section-header">
            <span className="careers-header-badge">WHY WORK WITH US</span>
            <h2>Why Join AWT Australia?</h2>
            <p>
              Discover an environment where your ideas are valued, your growth is supported,
              and your passion for travel creates real impact every day.
            </p>
          </div>

          <div className="why-join-grid">
            {whyJoinList.map((item, index) => (
              <div
                key={index}
                className="why-card reveal"
                style={{ '--reveal-delay': `${index * 0.08}s` }}
              >
                <div className="why-icon-badge">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Current Opportunities */}
        <section className="opportunities-section reveal" id="current-opportunities">
          <div className="careers-section-header">
            <span className="careers-header-badge">OPEN POSITIONS</span>
            <h2>Current Opportunities</h2>
            <p>
              We are always looking for talented people to join our growing team across Australia, New Zealand and international offices.
            </p>
          </div>

          <div className="opps-grid">
            {jobOpenings.map((job, idx) => (
              <div
                key={idx}
                className="opp-job-card reveal"
                style={{ '--reveal-delay': `${idx * 0.06}s` }}
              >
                <div className="opp-job-left">
                  <div className="opp-job-icon">
                    <i className={`fa-solid ${job.icon}`}></i>
                  </div>
                  <div className="opp-job-info">
                    <h4>{job.title}</h4>
                    <div className="opp-meta">
                      <span><i className="fa-solid fa-clock"></i> {job.type}</span>
                      <span><i className="fa-solid fa-location-dot"></i> {job.location}</span>
                    </div>
                  </div>
                </div>

                <button
                  className="btn-apply-now"
                  onClick={() => handleApplyClick(job.title)}
                >
                  Apply Now <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Life at AWT */}
        <section className="life-awt-section reveal">
          <div className="life-text-col">
            <span className="careers-header-badge">OUR WORK CULTURE</span>
            <h2>Life at AWT</h2>
            <p>
              At AWT Australia, you’ll work alongside talented professionals who share a passion for travel,
              innovation and exceptional customer service. We celebrate diversity, encourage new ideas and
              empower every team member to grow professionally while making a meaningful contribution to our success.
            </p>

            <div className="life-stats-row">
              <div className="life-stat-item">
                <h3>25+</h3>
                <p>Years Excellence</p>
              </div>
              <div className="life-stat-item">
                <h3>3</h3>
                <p>Global Hubs</p>
              </div>
              <div className="life-stat-item">
                <h3>100%</h3>
                <p>Growth Focus</p>
              </div>
            </div>
          </div>

          <div className="life-img-col">
            <img
              src="/image/team_group_photo.webp"
              alt="Life at AWT Australia"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 4: Ready to Join Our Journey? Banner */}
        <section className="join-journey-banner reveal">
          <div className="jj-content">
            <div className="jj-left">
              <h3>Ready to Join Our Journey?</h3>
              <p>Become part of a team that’s connecting people, destinations and opportunities across the world.</p>
              <div className="jj-contact-info">
                <span><i className="fa-solid fa-envelope"></i> info@awtaustralia.com</span>
                <span><i className="fa-solid fa-location-dot"></i> Melbourne • Auckland • Colombo</span>
              </div>
            </div>

            <button className="btn-join-cta" onClick={scrollToOpps}>
              View Current Opportunities <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </div>
        </section>

        {/* Bottom Newsletter Signup Bar */}
        <div className="bar reveal">
          <svg className="icon-plane" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <div className="text">
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter and stay updated with AWT Australia career news.</p>
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

      {/* --- Apply Now Modal Popup Form --- */}
      {selectedJob && (
        <div className="apply-modal-backdrop" onClick={() => setSelectedJob(null)}>
          <div className="apply-modal" onClick={(e) => e.stopPropagation()}>
            <button className="apply-modal-close" onClick={() => setSelectedJob(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            <h3>Apply for {selectedJob}</h3>
            <p style={{ color: '#64748b', fontSize: '0.88rem', margin: 0 }}>
              Send your details to our Talent Acquisition team at AWT Australia.
            </p>

            <form className="apply-modal-form" onSubmit={handleFormSubmit}>
              <label>
                Full Name *
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={applicantForm.fullName}
                  onChange={(e) => setApplicantForm({ ...applicantForm, fullName: e.target.value })}
                  required
                />
              </label>

              <label>
                Email Address *
                <input
                  type="email"
                  placeholder="e.g. sarah@example.com"
                  value={applicantForm.email}
                  onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  placeholder="e.g. +61 400 123 456"
                  value={applicantForm.phone}
                  onChange={(e) => setApplicantForm({ ...applicantForm, phone: e.target.value })}
                />
              </label>

              <label>
                Cover Note / Experience Summary
                <textarea
                  rows="3"
                  placeholder="Tell us briefly about your background and passion for travel..."
                  value={applicantForm.notes}
                  onChange={(e) => setApplicantForm({ ...applicantForm, notes: e.target.value })}
                ></textarea>
              </label>

              <button type="submit" className="btn-submit-app">
                Submit Application <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
