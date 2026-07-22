import React, { useRef } from 'react';

const eventsData = [
  {
    id: 1,
    title: 'ITB Berlin 2025',
    location: 'Berlin, Germany',
    dates: '4 – 6 Mar 2025',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80'
  },
  {
    id: 2,
    title: 'Arabian Travel Market 2025',
    location: 'Dubai, UAE',
    dates: '28 Apr – 1 May 2025',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&q=80'
  },
  {
    id: 3,
    title: 'WTM London 2024',
    location: 'London, UK',
    dates: '5 – 7 Nov 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80'
  },
  {
    id: 4,
    title: 'ATE – Australian Tourism Exchange 2024',
    location: 'Melbourne, Australia',
    dates: '12 – 14 May 2024',
    image: 'https://images.unsplash.com/photo-1486718448047-52a88e9d63b9?w=500&q=80'
  }
];

export default function EventsCarousel() {
  const eventsTrackRef = useRef(null);

  const handleScroll = (direction) => {
    const track = eventsTrackRef.current;
    if (!track) return;
    const card = track.querySelector('.event-card');
    const scrollAmount = card ? card.offsetWidth + 18 : 250;

    track.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div class="events-slider">
      <button
        class="arrow left"
        id="eventsPrev"
        aria-label="Previous event"
        onClick={() => handleScroll('prev')}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <div class="events-track" id="eventsTrack" ref={eventsTrackRef}>
        {eventsData.map((evt) => (
          <div key={evt.id} class="event-card">
            <img src={evt.image} alt={evt.title} />
            <h3>{evt.title}</h3>
            <p>{evt.location}</p>
            <span>{evt.dates}</span>
          </div>
        ))}
      </div>

      <button
        class="arrow right"
        id="eventsNext"
        aria-label="Next event"
        onClick={() => handleScroll('next')}
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}
