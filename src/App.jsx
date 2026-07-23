import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Brands from './pages/Brands';
import Team from './pages/Team';
import Careers from './pages/Careers';

import './styles/style.css';
import './styles/contact.css';
import './styles/news.css';
import './styles/brands.css';
import './styles/team.css';
import './styles/careers.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/exhibitions" element={<News />} />
          <Route path="/partnerships" element={<News />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
