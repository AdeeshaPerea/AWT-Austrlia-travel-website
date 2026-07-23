import React, { useState, useRef } from 'react';
import '../styles/news.css';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const articlesSectionRef = useRef(null);

  // Gallery Photos for International Exhibitions
  const exhibitionGallery = [
    { src: '/image/exhibition_networking.webp', title: 'Executive Networking at ITB Asia' },
    { src: '/image/exhibition_expo_hall.webp', title: 'AWT Pavilion at Arabian Travel Market' },
    { src: '/image/exhibition_eco_booth.webp', title: 'B2B Travel Partner Meetings at Eco Stand' },
    { src: '/image/exhibition_hall.webp', title: 'WTM London Global Showcase Hall' },
    { src: '/image/exhibition_booth_meeting.webp', title: 'Corporate Delegate Consultations' },
    { src: '/image/exhibition_executives.webp', title: 'Australian Tourism Exchange Presentation' }
  ];

  // Gallery Photos for Strategic Partnerships
  const partnershipGallery = [
    { src: '/image/partnership_handshake.webp', title: 'New Strategic Airline Partnership Signing' },
    { src: '/image/partnership_signing.webp', title: 'Executive Joint Venture Agreement' },
    { src: '/image/partnership_team_meeting.webp', title: 'Corporate Travel Advisory Board Strategy Meeting' },
    { src: '/image/partnership_board_signing.webp', title: 'International Tourism Alliance Signing' },
    { src: '/image/partnership_strategy.webp', title: 'Technology & API Integration Workshop' }
  ];

  // Gallery Photos for Sustainability & Responsible Tourism (User's Uploaded Photos)
  const sustainabilityGallery = [
    { src: '/image/sustainability_fjord_view.webp', title: 'Eco-Tourists Overlooking Fjord Lake Valley' },
    { src: '/image/sustainability_rainforest_trail.webp', title: 'Guided Rainforest Expedition Trail' },
    { src: '/image/sustainability_mountain_peak.webp', title: 'Mountain Peak Conservation & Community Travel' },
    { src: '/image/sustainability_boardwalk.webp', title: 'Protected Nature Boardwalk & Eco Trekking' },
    { src: '/image/sustainability_canopy_hike.webp', title: 'Tropical Rainforest Canopy Biodiversity Walk' }
  ];

  // Gallery Photos for Media Centre (User's Uploaded Photos)
  const mediaCentreGallery = [
    { src: '/image/media_center_montage.webp', title: 'AWT Executive TV Interview & Press Briefing Broadcast' },
    { src: '/image/media_center_interview.webp', title: 'Journalist One-on-One Executive Interview' },
    { src: '/image/media_center_press_conference.webp', title: 'AWT Corporate Leadership Press Conference Panel' },
    { src: '/image/media_center_broadcast_hall.webp', title: 'International Media Broadcast Cameras at AWT Summit' }
  ];

  // Comprehensive News Dataset covering ALL 8 Categories
  const newsArticles = [
    // 1. Sustainability
    {
      id: 1,
      title: "AWT Australia & Tourism Australia Launch Sustainable Great Barrier Reef Charter Fleet",
      category: "Sustainability",
      date: "July 18, 2025",
      readTime: "4 min read",
      author: "Elena Rostova",
      role: "Chief Sustainability Officer",
      image: "/image/news_sustainable_travel.webp",
      excerpt: "A landmark joint initiative introducing hybrid-electric luxury catamarans equipped with solar tech, reducing marine emissions by 45% across North Queensland.",
      spotlight: true,
      fullContent: `
        <p>AWT Australia is proud to announce a groundbreaking multi-million dollar partnership with Tourism Australia to launch a new generation of net-zero marine expedition vessels operating across the Great Barrier Reef.</p>
        <p>Equipped with advanced hybrid-electric propulsion, solar glass skin arrays, and onboard micro-waste recycling units, the new fleet reduces carbon emissions by 45% compared to traditional diesel catamarans while preserving fragile reef ecosystems.</p>
      `
    },
    {
      id: 2,
      title: "RentaWheel Converts 60% of Airport Fleet to All-Electric Vehicles in Major Capital Cities",
      category: "Sustainability",
      date: "April 25, 2025",
      readTime: "3 min read",
      author: "Tom Hetherington",
      role: "Fleet Logistics Lead",
      image: "/image/image-1.webp",
      excerpt: "Electric vehicle charging stations and premium EV rental options now active across Sydney, Melbourne, Brisbane, and Perth airport hubs.",
      fullContent: `
        <p>RentaWheel has accelerated its zero-emissions commitment by introducing over 400 new long-range electric vehicles (EVs) across major Australian airport hubs.</p>
      `
    },

    // 2. Company News
    {
      id: 3,
      title: "AWT Group Named 'Oceania's Leading Travel Management Group 2025' at World Travel Awards",
      category: "Company News",
      date: "June 28, 2025",
      readTime: "3 min read",
      author: "Marcus Vance",
      role: "VP Corporate Communications",
      image: "/image/news_award_ceremony.webp",
      excerpt: "Recognized for outstanding innovation in corporate travel management, customer satisfaction, and seamless digital booking platforms.",
      fullContent: `
        <p>AWT Australia was honored at the 32nd Annual World Travel Awards gala held in Sydney, securing the top accolade for Oceania's Leading Travel Management Group 2025.</p>
      `
    },
    {
      id: 4,
      title: "AWT Australia Expands Global Presence with New Regional Headquarters in Dubai",
      category: "Company News",
      date: "May 15, 2025",
      readTime: "4 min read",
      author: "Marcus Vance",
      role: "VP Corporate Communications",
      image: "/image/office-reception.webp",
      excerpt: "Strengthening Middle East operations to serve corporate clients and destination management partners across EMEA hubs.",
      fullContent: `
        <p>In line with international expansion plans, AWT Group officially opens its new regional office in Dubai Marina, providing localized support for global travel distribution.</p>
      `
    },

    // 3. Global Travel
    {
      id: 5,
      title: "Global Airline Passenger Capacity Surges Past Pre-Pandemic Benchmarks in Q2 2025",
      category: "Global Travel",
      date: "July 05, 2025",
      readTime: "5 min read",
      author: "David Sterling",
      role: "Head of Airline Partnerships",
      image: "/image/global_travel_airplane.webp",
      excerpt: "Aviation data indicates strong international passenger volume growth across APAC routes, driven by business travel and leisure demand.",
      fullContent: `
        <p>International passenger traffic has reached new records entering Q3 2025, with major long-haul routes connecting Australia to Asia and Europe reporting average load factors exceeding 88%.</p>
      `
    },
    {
      id: 6,
      title: "Trans-Tasman Air Routes Expand with 35% Increase in Corporate Seat Capacity",
      category: "Global Travel",
      date: "June 14, 2025",
      readTime: "4 min read",
      author: "David Sterling",
      role: "Head of Airline Partnerships",
      image: "/image/global_travel_network.webp",
      excerpt: "FlightRoo locks in expanded carrier agreements to boost flight capacity between Sydney, Melbourne, Auckland, and Christchurch.",
      fullContent: `
        <p>FlightRoo, AWT Australia's flagship flight aggregator, has added direct seat blocks across primary Trans-Tasman routes to accommodate booming corporate travel demand.</p>
      `
    },
    {
      id: 7,
      title: "APAC International Airport Infrastructure Upgrades Accelerate Smart Travel",
      category: "Global Travel",
      date: "May 22, 2025",
      readTime: "3 min read",
      author: "Sarah Lin",
      role: "Director of Market Insights",
      image: "/image/global_travel_airport.webp",
      excerpt: "Major capital airport hubs across Sydney, Singapore, and Tokyo introduce biometric fast-track gates and digital baggage tracking.",
      fullContent: `
        <p>Airports across Asia-Pacific are deploying cutting-edge biometric security gates, significantly reducing international transit times for AWT corporate passengers.</p>
      `
    },

    // 4. Events & Exhibitions
    {
      id: 8,
      title: "AWT Pavilion Highlights Sustainable Aviation at Arabian Travel Market Dubai 2025",
      category: "Events & Exhibitions",
      date: "May 10, 2025",
      readTime: "4 min read",
      author: "Claire Chen",
      role: "Event Operations Lead",
      image: "/image/exhibition_expo_hall.webp",
      excerpt: "Over 500 B2B travel delegates visited the AWT booth to explore wholesale flight rates, eco-charter fleets, and digital booking APIs.",
      fullContent: `
        <p>AWT Group made a major splash at Arabian Travel Market in Dubai, unveiling new Middle East destination packages and corporate travel management platforms.</p>
      `
    },
    {
      id: 9,
      title: "AWT Leadership Team Showcases APAC Travel Solutions at ITB Asia Singapore",
      category: "Events & Exhibitions",
      date: "April 18, 2025",
      readTime: "3 min read",
      author: "Claire Chen",
      role: "Event Operations Lead",
      image: "/image/exhibition_networking.webp",
      excerpt: "Executive networking sessions and bilateral partnership meetings locked in new regional hotel distribution contracts.",
      fullContent: `
        <p>During ITB Asia at Marina Bay Sands, AWT executives met with leading resort chains and DMCs to expand TripoClub's exclusive inventory.</p>
      `
    },

    // 5. Partnerships
    {
      id: 10,
      title: "AWT Signs Strategic Alliance with Leading Luxury Hotel Groups Across Oceania",
      category: "Partnerships",
      date: "June 20, 2025",
      readTime: "4 min read",
      author: "David Sterling",
      role: "Head of Partnerships",
      image: "/image/partnership_handshake.webp",
      excerpt: "Securing preferred room allocations, flexible corporate cancellation terms, and VIP amenities for AWT travel clients.",
      fullContent: `
        <p>AWT Group has formalized a multi-year partnership agreement with premier luxury hotel chains, granting AWT corporate clients instant upgrades and guaranteed availability.</p>
      `
    },
    {
      id: 11,
      title: "AWT & Tourism Australia Announce Joint Regional Promotion Program for 2025/2026",
      category: "Partnerships",
      date: "May 04, 2025",
      readTime: "3 min read",
      author: "Marcus Vance",
      role: "VP Corporate Communications",
      image: "/image/partnership_signing.webp",
      excerpt: "Co-funded marketing initiative driving international tourist arrivals into regional Australian destinations and eco-lodges.",
      fullContent: `
        <p>A joint promotional agreement signed in Sydney will highlight pristine Australian nature destinations to international travelers in North America and Asia.</p>
      `
    },

    // 6. Innovation
    {
      id: 12,
      title: "TripoClub Debuts Next-Gen AI Itinerary Engine & Dynamic Packaging Platform",
      category: "Innovation",
      date: "July 01, 2025",
      readTime: "5 min read",
      author: "Claire Chen",
      role: "TripoClub Brand Manager",
      image: "/image/brand_flightroo_logo.webp",
      excerpt: "Smart machine-learning algorithms build custom multi-city flight and hotel packages in real time with automated savings recommendations.",
      fullContent: `
        <p>TripoClub has rolled out its upgraded booking engine, allowing travelers to generate tailored multi-stop itineraries in seconds based on personal travel preferences.</p>
      `
    },
    {
      id: 13,
      title: "TripoClub Launches 'Ultimate Luxury Kimberley Helicopter Safari' Expeditions",
      category: "Innovation",
      date: "May 12, 2025",
      readTime: "4 min read",
      author: "Claire Chen",
      role: "TripoClub Brand Manager",
      image: "/image/ChatGPT Image Jul 18, 2026, 03_51_02 PM.webp",
      excerpt: "Exclusive small-group itineraries soaring over Western Australia's majestic gorges, luxury wilderness glamping, and private chef dining.",
      fullContent: `
        <p>TripoClub officially unveils its signature luxury expedition line, featuring private helicopter transport across WA's Kimberley region.</p>
      `
    },

    // 7. Travel Insights
    {
      id: 14,
      title: "AWT Travel Index Report: 78% of Travelers Seek Eco-Certified Experiences in 2025/2026",
      category: "Travel Insights",
      date: "May 30, 2025",
      readTime: "6 min read",
      author: "Sarah Lin",
      role: "Director of Market Insights",
      image: "/image/office-reception.webp",
      excerpt: "Comprehensive survey of 10,000 APAC travelers reveals shifting priorities toward authentic local culture, eco-lodges, and transparent carbon footprints.",
      fullContent: `
        <p>The latest 2025 AWT Travel Index report provides deep insights into consumer behavior across Australia and New Zealand. Key findings show that 78% of respondents actively choose eco-certified hotels and tours when booking their holidays.</p>
      `
    },

    // 8. Media Centre
    {
      id: 15,
      title: "AWT Executive Panel Shares Vision for Future of Travel at Live Press Broadcast",
      category: "Media Centre",
      date: "July 10, 2025",
      readTime: "4 min read",
      author: "Marcus Vance",
      role: "VP Corporate Communications",
      image: "/image/media_center_montage.webp",
      excerpt: "Leadership team addresses TV broadcast journalists on AI booking innovation, fleet electrification, and international growth targets.",
      fullContent: `
        <p>AWT Group leadership hosted a live broadcast press briefing at corporate headquarters, providing journalists with exclusive operational metrics and future strategic plans.</p>
      `
    },
    {
      id: 16,
      title: "Media Briefing: AWT Group Releases 2025 Factsheet & Editorial Asset Package",
      category: "Media Centre",
      date: "June 02, 2025",
      readTime: "3 min read",
      author: "Marcus Vance",
      role: "VP Corporate Communications",
      image: "/image/media_center_press_conference.webp",
      excerpt: "Downloadable high-res imagery, executive biographies, and brand guidelines now available via the AWT Press Desk.",
      fullContent: `
        <p>The AWT Communications Desk has launched an updated digital press kit for global travel writers, editors, and broadcasting producers.</p>
      `
    }
  ];

  const categories = ['All', 'Company News', 'Travel Insights', 'Global Travel', 'Events & Exhibitions', 'Partnerships', 'Innovation', 'Sustainability', 'Media Centre'];

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setSearchQuery('');
  };

  const handleTagFilterClick = (tagQuery) => {
    setSearchQuery(tagQuery);
    if (articlesSectionRef.current) {
      articlesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = !searchQuery ||
                          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const spotlightStory = newsArticles.find(a => a.spotlight) || newsArticles[0];

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (!subscribeEmail || !subscribeEmail.includes('@')) {
      setSubscribeStatus('error');
      return;
    }
    setSubscribeStatus('success');
    setSubscribeEmail('');
    setTimeout(() => setSubscribeStatus(''), 4000);
  };

  return (
    <div className="news-page" style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: '#0a193c',
          color: '#00b4d8',
          padding: '12px 24px',
          borderRadius: '25px',
          zIndex: 3000,
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          fontWeight: 600,
          border: '1px solid #00b4d8'
        }}>
          <i className="fa-solid fa-check-circle"></i> {toastMessage}
        </div>
      )}

      {/* --- Section 1: Hero Banner --- */}
      <section className="news-hero">
        <div className="news-hero-overlay"></div>
        <div className="news-hero-container">
          <div className="news-hero-content">
            <h1 className="news-hero-title">News & Insights</h1>
            <h2 className="news-hero-subtitle">Stay Connected with the Future of Travel</h2>
            <div className="news-hero-red-line"></div>
            <div className="news-hero-paragraphs">
              <p>
                Welcome to the AWT Newsroom—your source for the latest updates from
                our group, travel industry insights, strategic partnerships and global
                developments.
              </p>
              <p>
                From international tourism trends to major exhibitions and company
                announcements, we keep our partners and clients informed about what's
                shaping the future of travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Search & Category Button Bar (Interactive Filter Buttons) --- */}
      <section className="news-controls-section">
        <div className="news-controls-container">
          {/* Search Input */}
          <div className="news-search-box">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              className="news-search-input"
              placeholder="Search news, topics, press releases, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="news-search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search">
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="news-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat)}
              >
                {cat === 'All' && <i className="fa-solid fa-layer-group"></i>}
                {cat === 'Company News' && <i className="fa-solid fa-newspaper"></i>}
                {cat === 'Travel Insights' && <i className="fa-solid fa-chart-line"></i>}
                {cat === 'Global Travel' && <i className="fa-solid fa-plane"></i>}
                {cat === 'Events & Exhibitions' && <i className="fa-solid fa-calendar-days"></i>}
                {cat === 'Partnerships' && <i className="fa-solid fa-handshake"></i>}
                {cat === 'Innovation' && <i className="fa-solid fa-microchip"></i>}
                {cat === 'Sustainability' && <i className="fa-solid fa-leaf"></i>}
                {cat === 'Media Centre' && <i className="fa-solid fa-bullhorn"></i>}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- Main Content Layout Container --- */}
      <div className="news-main-container">

        {/* Major Headline Spotlight Story (Shows when on 'All') */}
        {activeCategory === 'All' && !searchQuery && (
          <div className="spotlight-section">
            <div className="section-header">
              <h2><i className="fa-solid fa-star" style={{ color: '#f59e0b' }}></i> Major Headline Story</h2>
            </div>
            <div className="spotlight-card">
              <div className="spotlight-img-wrap">
                <img src={spotlightStory.image} alt={spotlightStory.title} loading="lazy" decoding="async" />
                <span className="spotlight-badge-floating">
                  <i className="fa-solid fa-crown"></i> Featured Story
                </span>
              </div>
              <div className="spotlight-info">
                <div className="news-meta">
                  <span><i className="fa-regular fa-calendar"></i> {spotlightStory.date}</span>
                  <span>•</span>
                  <span><i className="fa-regular fa-clock"></i> {spotlightStory.readTime}</span>
                  <span>•</span>
                  <span style={{ color: '#00b4d8', fontWeight: 600 }}>{spotlightStory.category}</span>
                </div>
                <h3>{spotlightStory.title}</h3>
                <p>{spotlightStory.excerpt}</p>
                <button className="btn-read-story" onClick={() => setSelectedArticle(spotlightStory)}>
                  Read Full Story <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- 2-Column Feature Cards Grid --- */}
        <div className="news-feature-grid">

          {/* Card 1: Global Travel Industry */}
          {(activeCategory === 'All' || activeCategory === 'Global Travel') && (
            <div className="feature-box-card">
              <div className="fb-content">
                <div>
                  <div className="fb-header">
                    <div className="fb-icon-badge" style={{ background: '#0a193c', color: '#00b4d8' }}>
                      <i className="fa-solid fa-plane"></i>
                    </div>
                    <h3>Global Travel Industry</h3>
                  </div>
                  <p className="fb-desc">
                    Keeping our international partners, flight networks, and travel management clients up to date with global aviation capacity changes, airport terminal expansions, and evolving tourism markets.
                  </p>
                  <div className="fb-bullets-grid">
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Airline')}>
                      <i className="fa-solid fa-circle-check"></i> Airline news & capacity
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Trends')}>
                      <i className="fa-solid fa-circle-check"></i> Industry trends
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Tourism')}>
                      <i className="fa-solid fa-circle-check"></i> Global tourism
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Trans-Tasman')}>
                      <i className="fa-solid fa-circle-check"></i> Trans-Tasman routes
                    </div>
                  </div>
                </div>
              </div>
              <div className="fb-image-wrap" onClick={() => setSelectedGalleryImage({ src: '/image/global_travel_airplane.webp', title: 'Global Aviation Network' })} style={{ cursor: 'pointer' }}>
                <img src="/image/global_travel_airplane.webp" alt="Global Travel Aircraft" loading="lazy" decoding="async" />
              </div>
            </div>
          )}

          {/* Card 2: Latest Company News */}
          {(activeCategory === 'All' || activeCategory === 'Company News') && (
            <div className="feature-box-card">
              <div className="fb-content">
                <div>
                  <div className="fb-header">
                    <div className="fb-icon-badge" style={{ background: '#ef4444', color: '#ffffff' }}>
                      <i className="fa-solid fa-newspaper"></i>
                    </div>
                    <h3>Latest Company News</h3>
                  </div>
                  <p className="fb-desc">
                    Follow the latest milestones across the AWT Group, including strategic agreements, market growth, and team appointments.
                  </p>
                  <div className="fb-bullets-grid">
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Partnerships')}>
                      <i className="fa-solid fa-circle-check"></i> Strategic partnerships
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Expansion')}>
                      <i className="fa-solid fa-circle-check"></i> Global expansion
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Technology')}>
                      <i className="fa-solid fa-circle-check"></i> Tech launches
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Award')}>
                      <i className="fa-solid fa-circle-check"></i> Industry awards
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Appointments')}>
                      <i className="fa-solid fa-circle-check"></i> Executive appointments
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Corporate')}>
                      <i className="fa-solid fa-circle-check"></i> Announcements
                    </div>
                  </div>
                </div>
              </div>
              <div className="fb-image-wrap" onClick={() => setSelectedGalleryImage({ src: '/image/office-reception.webp', title: 'AWT Group Corporate Headquarters' })} style={{ cursor: 'pointer' }}>
                <img src="/image/office-reception.webp" alt="AWT Corporate Head Office" loading="lazy" decoding="async" />
              </div>
            </div>
          )}

          {/* Card 3: Travel Industry Insights */}
          {(activeCategory === 'All' || activeCategory === 'Travel Insights') && (
            <div className="feature-box-card">
              <div className="fb-content">
                <div>
                  <div className="fb-header">
                    <div className="fb-icon-badge">
                      <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <h3>Travel Industry Insights</h3>
                  </div>
                  <p className="fb-desc">
                    The travel industry is constantly evolving. Our experts share market intelligence, emerging travel trends and insights into the future of tourism.
                  </p>
                  <strong style={{ color: '#0f172a', fontSize: '0.88rem', display: 'block', marginBottom: '8px' }}>
                    Key Topics Included:
                  </strong>
                  <div className="topics-cloud-sm">
                    <span className="topic-chip-sm" onClick={() => handleTagFilterClick('Tourism')}><i className="fa-solid fa-globe"></i> Global Tourism</span>
                    <span className="topic-chip-sm" onClick={() => handleTagFilterClick('Airline')}><i className="fa-solid fa-plane"></i> Airline Updates</span>
                    <span className="topic-chip-sm" onClick={() => handleTagFilterClick('Hotel')}><i className="fa-solid fa-hotel"></i> Hotel Trends</span>
                    <span className="topic-chip-sm" onClick={() => handleTagFilterClick('Sustainable')}><i className="fa-solid fa-leaf"></i> Sustainable Travel</span>
                    <span className="topic-chip-sm" onClick={() => handleTagFilterClick('AI')}><i className="fa-solid fa-robot"></i> AI in Travel</span>
                  </div>
                </div>
              </div>
              <div className="fb-image-wrap" onClick={() => setSelectedGalleryImage({ src: '/image/sustainability_mountain_peak.webp', title: 'Nature Mountain Conservation Insights' })} style={{ cursor: 'pointer' }}>
                <img src="/image/sustainability_mountain_peak.webp" alt="Travel Industry Insights Nature Lake" loading="lazy" decoding="async" />
              </div>
            </div>
          )}

          {/* Card 4: Events & Exhibitions */}
          {(activeCategory === 'All' || activeCategory === 'Events & Exhibitions') && (
            <div className="feature-box-card">
              <div className="fb-content">
                <div>
                  <div className="fb-header">
                    <div className="fb-icon-badge">
                      <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <h3>Events & Exhibitions</h3>
                  </div>
                  <p className="fb-desc">
                    AWT proudly participates in leading international travel events around the world. Meet our team at global exhibitions including:
                  </p>
                  <div className="fb-bullets-grid">
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('ITB Berlin')}>
                      <i className="fa-solid fa-circle-check"></i> ITB Berlin
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('ITB Asia')}>
                      <i className="fa-solid fa-circle-check"></i> ITB Asia Singapore
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Arabian Travel Market')}>
                      <i className="fa-solid fa-circle-check"></i> Arabian Travel Market
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('WTM London')}>
                      <i className="fa-solid fa-circle-check"></i> World Travel Market London
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Australian Tourism Exchange')}>
                      <i className="fa-solid fa-circle-check"></i> Australian Tourism Exchange
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Tourism Australia')}>
                      <i className="fa-solid fa-circle-check"></i> Tourism Australia events
                    </div>
                  </div>
                </div>
              </div>
              <div className="fb-image-wrap" onClick={() => setSelectedGalleryImage({ src: '/image/exhibition_eco_booth.webp', title: 'AWT Australia Eco Stand at Trade Show' })} style={{ cursor: 'pointer' }}>
                <img src="/image/exhibition_eco_booth.webp" alt="Events & Exhibitions AWT Stand" loading="lazy" decoding="async" />
              </div>
            </div>
          )}

          {/* Card 5: Partnership Announcements */}
          {(activeCategory === 'All' || activeCategory === 'Partnerships') && (
            <div className="feature-box-card">
              <div className="fb-content">
                <div>
                  <div className="fb-header">
                    <div className="fb-icon-badge">
                      <i className="fa-solid fa-handshake"></i>
                    </div>
                    <h3>Partnership Announcements</h3>
                  </div>
                  <p className="fb-desc">
                    At AWT, partnerships drive innovation and growth. Stay informed about our newest collaborations with:
                  </p>
                  <div className="fb-bullets-grid">
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Airlines')}>
                      <i className="fa-solid fa-circle-check"></i> Airlines
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Technology providers')}>
                      <i className="fa-solid fa-circle-check"></i> Technology providers
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Hotel groups')}>
                      <i className="fa-solid fa-circle-check"></i> Hotel groups
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Corporate travel')}>
                      <i className="fa-solid fa-circle-check"></i> Corporate travel partners
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('DMC')}>
                      <i className="fa-solid fa-circle-check"></i> Destination Management
                    </div>
                    <div className="fb-bullet-item" onClick={() => handleTagFilterClick('Government tourism')}>
                      <i className="fa-solid fa-circle-check"></i> Government tourism
                    </div>
                  </div>
                  <a className="fb-action-link" onClick={() => handleTagFilterClick('Partnership')}>
                    View All Partnerships <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="fb-image-wrap" onClick={() => setSelectedGalleryImage({ src: '/image/partnership_handshake.webp', title: 'Executive Joint Venture Handshake' })} style={{ cursor: 'pointer' }}>
                <img src="/image/partnership_handshake.webp" alt="Partnership Announcements Handshake" loading="lazy" decoding="async" />
              </div>
            </div>
          )}

          {/* Card 6: Innovation & Technology */}
          {(activeCategory === 'All' || activeCategory === 'Innovation') && (
            <div className="feature-box-card">
              <div className="fb-content">
                <div>
                  <div className="fb-header">
                    <div className="fb-icon-badge">
                      <i className="fa-solid fa-microchip"></i>
                    </div>
                    <h3>Innovation & Technology</h3>
                  </div>
                  <p className="fb-desc">
                    Technology is transforming the travel experience. Through our brands including <strong>TripoClub</strong>, our online booking platform, and <strong>FlightRoo</strong>, our retail flight network we continue investing in smarter digital solutions.
                  </p>
                  <div className="fb-brand-logos">
                    <img src="/image/Tripoclub.webp" alt="TripoClub" className="fb-brand-logo-img" />
                    <img src="/image/brand_flightroo_logo.webp" alt="FlightRoo" className="fb-brand-logo-img" />
                    <img src="/image/brand_rentawheel_logo.webp" alt="Rentawheel" className="fb-brand-logo-img" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <a className="fb-action-link" onClick={() => handleTagFilterClick('Technology')}>
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="fb-image-wrap" onClick={() => setSelectedGalleryImage({ src: '/image/image-1.webp', title: 'TripoClub Mobile App & Laptop Engine' })} style={{ cursor: 'pointer' }}>
                <img src="/image/image-1.webp" alt="Innovation & Technology Digital Engine" loading="lazy" decoding="async" />
              </div>
            </div>
          )}

          {/* Card 7: Sustainability & Responsible Tourism (User's Photo!) */}
          {(activeCategory === 'All' || activeCategory === 'Sustainability') && (
            <div className="feature-box-card">
              <div className="fb-content">
                <div>
                  <div className="fb-header">
                    <div className="fb-icon-badge">
                      <i className="fa-solid fa-leaf"></i>
                    </div>
                    <h3>Sustainability & Responsible Tourism</h3>
                  </div>
                  <p className="fb-desc">
                    We are committed to supporting sustainable tourism by promoting responsible travel practices, working with ethical partners and encouraging experiences that benefit local communities while protecting the environment.
                  </p>
                  <a className="fb-action-link" onClick={() => handleTagFilterClick('Sustainability')}>
                    Our Commitment <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="fb-image-wrap" onClick={() => setSelectedGalleryImage({ src: '/image/sustainability_fjord_view.webp', title: 'Eco Tourists Overlooking Mountain Fjord' })} style={{ cursor: 'pointer' }}>
                <img src="/image/sustainability_fjord_view.webp" alt="Sustainability & Responsible Tourism Hikers" loading="lazy" decoding="async" />
              </div>
            </div>
          )}

          {/* Card 8: Media Centre (User's Photo!) */}
          {(activeCategory === 'All' || activeCategory === 'Media Centre') && (
            <div className="feature-box-card">
              <div className="fb-content">
                <div>
                  <div className="fb-header">
                    <div className="fb-icon-badge">
                      <i className="fa-solid fa-microphone"></i>
                    </div>
                    <h3>Media Centre</h3>
                  </div>
                  <p className="fb-desc">
                    For media enquiries, interviews, press releases and corporate communications, please contact our communications team. We welcome opportunities to share our story and collaborate with industry publications.
                  </p>
                  <a className="fb-action-link" onClick={() => alert('Contacting AWT Media Relations Desk: press@awtaustralia.com')}>
                    Contact Media Team <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="fb-image-wrap" onClick={() => setSelectedGalleryImage({ src: '/image/media_center_montage.webp', title: 'AWT Press Conference Camera Crew' })} style={{ cursor: 'pointer' }}>
                <img src="/image/media_center_montage.webp" alt="Media Centre Broadcast Crew" loading="lazy" decoding="async" />
              </div>
            </div>
          )}

        </div>

        {/* --- DEDICATED PHOTO GALLERY (Shows ONLY when a specific category button is clicked!) --- */}

        {/* Global Travel Selected -> Show Global Travel Photo Gallery */}
        {activeCategory === 'Global Travel' && (
          <section className="gallery-showcase-section">
            <div className="gs-header">
              <h3><i className="fa-solid fa-images" style={{ color: '#00b4d8' }}></i> Global Travel Photo Gallery</h3>
            </div>
            <div className="photo-gallery-grid">
              <div className="pg-item" onClick={() => setSelectedGalleryImage({ src: '/image/global_travel_airplane.webp', title: 'Global Aviation Network' })}>
                <img src="/image/global_travel_airplane.webp" alt="Airplane in sunset sky" loading="lazy" decoding="async" />
              </div>
              <div className="pg-item" onClick={() => setSelectedGalleryImage({ src: '/image/global_travel_network.webp', title: '3D Global Flight Route Map' })}>
                <img src="/image/global_travel_network.webp" alt="Global Flight Network Map" loading="lazy" decoding="async" />
              </div>
              <div className="pg-item" onClick={() => setSelectedGalleryImage({ src: '/image/global_travel_airport.webp', title: 'International Airport Hubs' })}>
                <img src="/image/global_travel_airport.webp" alt="Modern airport terminal" loading="lazy" decoding="async" />
                <div className="pg-badge"><i className="fa-regular fa-images"></i> 6</div>
              </div>
            </div>
          </section>
        )}

        {/* Events & Exhibitions Selected -> Show Trade Show Photo Gallery */}
        {activeCategory === 'Events & Exhibitions' && (
          <section className="gallery-showcase-section">
            <div className="gs-header">
              <h3><i className="fa-solid fa-images" style={{ color: '#00b4d8' }}></i> Events & Exhibitions Photo Gallery</h3>
            </div>
            <div className="photo-gallery-grid">
              {exhibitionGallery.map((img, idx) => (
                <div key={idx} className="pg-item" onClick={() => setSelectedGalleryImage(img)}>
                  <img src={img.src} alt={img.title} loading="lazy" decoding="async" />
                  {idx === exhibitionGallery.length - 1 && <div className="pg-badge"><i className="fa-regular fa-images"></i> 7</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Partnerships Selected -> Show Partnerships Photo Gallery */}
        {activeCategory === 'Partnerships' && (
          <section className="gallery-showcase-section">
            <div className="gs-header">
              <h3><i className="fa-solid fa-images" style={{ color: '#00b4d8' }}></i> Strategic Partnerships Photo Gallery</h3>
            </div>
            <div className="photo-gallery-grid">
              {partnershipGallery.map((img, idx) => (
                <div key={idx} className="pg-item" onClick={() => setSelectedGalleryImage(img)}>
                  <img src={img.src} alt={img.title} loading="lazy" decoding="async" />
                  {idx === partnershipGallery.length - 1 && <div className="pg-badge"><i className="fa-regular fa-images"></i> 5</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sustainability Selected -> Show Sustainability Photo Gallery (User's Uploaded Photos!) */}
        {activeCategory === 'Sustainability' && (
          <section className="gallery-showcase-section">
            <div className="gs-header">
              <h3><i className="fa-solid fa-images" style={{ color: '#00b4d8' }}></i> Sustainability & Eco-Tourism Photo Gallery</h3>
            </div>
            <div className="photo-gallery-grid">
              {sustainabilityGallery.map((img, idx) => (
                <div key={idx} className="pg-item" onClick={() => setSelectedGalleryImage(img)}>
                  <img src={img.src} alt={img.title} loading="lazy" decoding="async" />
                  {idx === sustainabilityGallery.length - 1 && <div className="pg-badge"><i className="fa-regular fa-images"></i> 5</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Media Centre Selected -> Show Press Camera Crew Photo Gallery (User's Uploaded Photos!) */}
        {activeCategory === 'Media Centre' && (
          <section className="gallery-showcase-section">
            <div className="gs-header">
              <h3><i className="fa-solid fa-images" style={{ color: '#00b4d8' }}></i> Media Centre & Press Desk Photo Gallery</h3>
            </div>
            <div className="photo-gallery-grid">
              {mediaCentreGallery.map((img, idx) => (
                <div key={idx} className="pg-item" onClick={() => setSelectedGalleryImage(img)}>
                  <img src={img.src} alt={img.title} loading="lazy" decoding="async" />
                  {idx === mediaCentreGallery.length - 1 && <div className="pg-badge"><i className="fa-regular fa-images"></i> 7</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- News Articles Grid (Dynamic Filtering) --- */}
        <section className="news-articles-section" ref={articlesSectionRef}>
          <div className="section-header">
            <h2>
              <i className="fa-solid fa-newspaper" style={{ color: '#00b4d8' }}></i>
              {activeCategory === 'All' ? 'Latest Press Releases & Updates' : `${activeCategory} Articles`}
              {searchQuery && ` (Filter: "${searchQuery}")`}
            </h2>
          </div>

          {filteredArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px 20px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <i className="fa-solid fa-folder-open" style={{ fontSize: '2.5rem', color: '#94a3b8', marginBottom: '15px' }}></i>
              <h3 style={{ color: '#0f172a', margin: '0 0 8px 0' }}>No articles found</h3>
              <p style={{ color: '#64748b', margin: '0 0 20px 0' }}>We couldn't find any articles matching your search query or selected category.</p>
              <button className="btn-read-story" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>
                Reset Search & Filters
              </button>
            </div>
          ) : (
            <div className="news-grid">
              {filteredArticles.map((article) => (
                <article key={article.id} className="news-card">
                  <div className="news-card-img" onClick={() => setSelectedArticle(article)} style={{ cursor: 'pointer' }}>
                    <img src={article.image} alt={article.title} loading="lazy" decoding="async" />
                    <span className="category-tag">{article.category}</span>
                  </div>
                  <div className="news-card-body">
                    <div className="news-meta">
                      <span><i className="fa-regular fa-calendar"></i> {article.date}</span>
                      <span>•</span>
                      <span><i className="fa-regular fa-clock"></i> {article.readTime}</span>
                    </div>
                    <h3 className="news-card-title" onClick={() => setSelectedArticle(article)}>
                      {article.title}
                    </h3>
                    <p className="news-card-excerpt">{article.excerpt}</p>
                    <div className="news-card-footer">
                      <div className="author-info">
                        <div className="author-avatar">{article.author.charAt(0)}</div>
                        <span>{article.author}</span>
                      </div>
                      <button className="btn-card-read" onClick={() => setSelectedArticle(article)}>
                        Read <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* --- Bottom Newsletter Signup Bar (Matching User's Provided Code) --- */}
        <div className="bar">
          <svg className="icon-plane" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <div className="text">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter and never miss an update from AWT Australia.</p>
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

      {/* --- Gallery Photo Lightbox Modal --- */}
      {selectedGalleryImage && (
        <div className="article-modal-backdrop" onClick={() => setSelectedGalleryImage(null)}>
          <div className="article-modal" style={{ maxWidth: '750px', borderRadius: '20px', overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
            <button className="article-modal-close" onClick={() => setSelectedGalleryImage(null)} aria-label="Close modal">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={selectedGalleryImage.src} alt={selectedGalleryImage.title} style={{ width: '100%', height: '420px', objectFit: 'cover' }} loading="lazy" decoding="async" />
            <div style={{ padding: '25px 30px', background: '#0a193c', color: '#ffffff' }}>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>{selectedGalleryImage.title}</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginTop: '5px', margin: 0 }}>AWT Media Gallery</p>
            </div>
          </div>
        </div>
      )}

      {/* --- Article Reader Modal --- */}
      {selectedArticle && (
        <div className="article-modal-backdrop" onClick={() => setSelectedArticle(null)}>
          <div className="article-modal" onClick={(e) => e.stopPropagation()}>
            <button className="article-modal-close" onClick={() => setSelectedArticle(null)} aria-label="Close modal">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="modal-header-img" loading="lazy" decoding="async" />
            <div className="modal-content-body">
              <span className="modal-category-badge">{selectedArticle.category}</span>
              <h2 className="modal-title">{selectedArticle.title}</h2>
              <div className="modal-meta-bar">
                <div>
                  <strong style={{ color: '#0f172a' }}>{selectedArticle.author || 'AWT Newsroom'}</strong>
                  {selectedArticle.role && <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{selectedArticle.role}</div>}
                </div>
                <div><i className="fa-regular fa-calendar"></i> {selectedArticle.date}</div>
              </div>

              <div
                className="modal-text"
                dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
