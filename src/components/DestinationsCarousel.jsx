import React, { useRef, useEffect, useState } from 'react';

const destinationsData = [
  {
    id: 'bali',
    name: 'BALI',
    price: '$599*',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&q=80'
  },
  {
    id: 'thailand',
    name: 'THAILAND',
    price: '$649*',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&q=80'
  },
  {
    id: 'srilanka',
    name: 'SRI LANKA',
    price: '$699*',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=500&q=80'
  },
  {
    id: 'japan',
    name: 'JAPAN',
    price: '$899*',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=500&q=80'
  },
  {
    id: 'maldives',
    name: 'MALDIVES',
    price: '$1,199*',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&q=80'
  }
];

export default function DestinationsCarousel() {
  const destTrackRef = useRef(null);
  const nextBtnRef = useRef(null);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    // One-time gentle pulse on the next arrow to hint interactivity
    const timer = setTimeout(() => {
      setIsPulsing(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const track = destTrackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll('.dest-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const cardArray = Array.from(cards);
            const index = cardArray.indexOf(el);
            if (index !== -1) {
              el.style.animationDelay = `${index * 0.08}s`;
            }
            el.classList.add('in-view');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleScroll = (direction) => {
    const track = destTrackRef.current;
    if (!track) return;
    const card = track.querySelector('.dest-card');
    const scrollAmount = card ? card.offsetWidth + 18 : 260;

    track.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section class="destinations">
      <div class="dest-intro">
        <div class="eyebrow">Popular Destinations</div>
        <h2>Inspire Your Next Adventure</h2>
        <p>
          From vibrant cities to serene beaches and breathtaking landscapes, discover the world with us.
        </p>
        <a href="#">
          EXPLORE ALL DESTINATIONS <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div class="dest-carousel">
        <button
          class="dest-arrow prev"
          id="destPrev"
          aria-label="Previous destination"
          onClick={() => handleScroll('prev')}
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <div class="dest-track" id="destTrack" ref={destTrackRef}>
          {destinationsData.map((dest) => (
            <div
              key={dest.id}
              class="dest-card"
              style={{ backgroundImage: `url('${dest.image}')` }}
            >
              <div class="dest-info">
                <h3>{dest.name}</h3>
                <div class="label">Packages from</div>
                <div class="price">{dest.price}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          class={`dest-arrow next ${isPulsing ? 'pulse' : ''}`}
          id="destNext"
          ref={nextBtnRef}
          aria-label="Next destination"
          onClick={() => handleScroll('next')}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
