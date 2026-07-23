import React, { useState } from 'react';
import NetworkBanner from '../components/NetworkBanner';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.fullName || 'for reaching out'}! Your message has been sent successfully.`);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {/* HERO */}
      <section class="about-hero">
        <div class="overlay"></div>

        <div class="hero-content">
          <h4>CONTACT US</h4>

          <h1>
            LET'S CONNECT &amp;<br />
            <span>CREATE UNFORGETTABLE</span><br />
            <span>JOURNEYS TOGETHER</span>
          </h1>

          <p>
            Whether you're a traveller, partner, supplier or media representative,
            our team is here to assist you every step of the way.
          </p>
        </div>

        <div class="airplane">
          <i class="fa-solid fa-plane"></i>
        </div>

        {/* Contact strip sits on the bottom edge of the hero image */}
        <section class="contact-strip">
          <div class="contact-strip-inner">
            <div class="strip-item">
              <div class="strip-icon outline-yellow">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div class="strip-text">
                <h5>CALL US</h5>
                <h3>1300 589 652</h3>
                <p>Mon – Fri: 9AM – 6PM AEST</p>
              </div>
            </div>

            <span class="strip-divider"></span>

            <div class="strip-item">
              <div class="strip-icon outline-yellow">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="strip-text">
                <h5>EMAIL US</h5>
                <h3>info@awtaustralia.com</h3>
                <p>We reply within 24 hours</p>
              </div>
            </div>

            <span class="strip-divider"></span>

            <div class="strip-item">
              <div class="strip-icon outline-yellow">
                <i class="fa-solid fa-comments"></i>
              </div>
              <div class="strip-text">
                <h5>LIVE CHAT</h5>
                <h3>Chat with our team</h3>
                <p>Available on website</p>
              </div>
            </div>

            <span class="strip-divider"></span>

            <div class="strip-item">
              <div class="strip-icon fill-whatsapp">
                <i class="fa-brands fa-whatsapp"></i>
              </div>
              <div class="strip-text">
                <h5>WHATSAPP</h5>
                <h3>+61 1300 589 652</h3>
                <p>Quick response</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* CONTACT FORM SECTION */}
      <section class="contact-section">
        <div class="contact-card">
          {/* Left: Form */}
          <div class="contact-form-col">
            <h2>SEND US A MESSAGE</h2>
            <p class="form-subtitle">Fill in the form below and our team will get back to you shortly.</p>

            <form class="contact-form" onSubmit={handleSubmit}>
              <div class="form-row">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div class="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message*"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <div class="form-footer">
                <button type="submit" class="send-btn">
                  <span>SEND MESSAGE</span>
                  <i class="fa-solid fa-paper-plane"></i>
                </button>

                <div class="privacy-note">
                  <i class="fa-solid fa-lock"></i>
                  <span>We respect your privacy.<br />Your information will never be shared.</span>
                </div>
              </div>
            </form>
          </div>

          {/* Middle: Office Info */}
          <div class="office-info-col">
            <h2>OUR HEAD OFFICE</h2>

            <div class="info-item">
              <div class="info-icon"><i class="fa-solid fa-location-dot"></i></div>
              <div>
                <h5>ADDRESS</h5>
                <p>Level 23, Tower 5/727 Collins St,<br />Docklands VIC 3008, Australia</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><i class="fa-solid fa-phone"></i></div>
              <div>
                <h5>PHONE</h5>
                <p>1300 589 652</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><i class="fa-solid fa-envelope"></i></div>
              <div>
                <h5>EMAIL</h5>
                <p>info@awtaustralia.com</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><i class="fa-solid fa-globe"></i></div>
              <div>
                <h5>WEBSITE</h5>
                <p>www.awtaustralia.com</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><i class="fa-solid fa-clock"></i></div>
              <div>
                <h5>OFFICE HOURS</h5>
                <p>Mon – Fri: 9:00 AM – 6:00 PM (AEST)<br />Sat – Sun: Closed</p>
              </div>
            </div>

            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="directions-btn">
              <span>GET DIRECTIONS</span>
              <span class="btn-icon">
                <i class="fa-solid fa-location-dot"></i>
              </span>
            </a>
          </div>

          {/* Right: Office Image */}
          <div class="office-image-col">
            <img src="/image/office-reception.webp" alt="AWTAustralia Head Office Reception" />
          </div>
        </div>
      </section>

      {/* GLOBAL OFFICES */}
      <section class="global-offices">
        <div class="container">
          <div class="section-title">
            <h2>OUR GLOBAL OFFICES</h2>
          </div>

          <div class="offices-grid">
            {/* Melbourne */}
            <div class="office-card">
              <div class="office-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Melbourne_skyline_sor.jpg" alt="Melbourne" />
                <div class="location-badge">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
              </div>

              <div class="office-content">
                <h3>MELBOURNE</h3>
                <span>Australia</span>

                <div class="office-details">
                  <div class="detail">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>
                      Level 23, Tower 5/727 Collins St,<br />
                      Docklands VIC 3008, Australia
                    </p>
                  </div>

                  <div class="detail">
                    <i class="fa-solid fa-phone"></i>
                    <p>1300 589 652</p>
                  </div>

                  <div class="detail">
                    <i class="fa-solid fa-envelope"></i>
                    <p>info@awtaustralia.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colombo */}
            <div class="office-card">
              <div class="office-image">
                <img src="https://images.unsplash.com/photo-1546708973-b339540b5162?w=500&q=80" alt="Colombo" />
                <div class="location-badge">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
              </div>

              <div class="office-content">
                <h3>COLOMBO</h3>
                <span>Sri Lanka</span>

                <div class="office-details">
                  <div class="detail">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>
                      75 Galle Rd,<br />
                      Colombo 03, Sri Lanka
                    </p>
                  </div>

                  <div class="detail">
                    <i class="fa-solid fa-phone"></i>
                    <p>+94 11 752 8050</p>
                  </div>

                  <div class="detail">
                    <i class="fa-solid fa-envelope"></i>
                    <p>colombo@awtaustralia.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK BANNER */}
      <NetworkBanner />
    </>
  );
}
