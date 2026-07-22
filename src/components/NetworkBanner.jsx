import React, { useMemo } from 'react';

const rows = [
  "0000111111000000000000000000000000000111111111100000000000000000000",
  "0001111111100000000000111111000000001111111111111000000000000000000",
  "0011111111110000000011111111100000011111111111111110000000000000000",
  "0111111111111000000111111111110000111111111111111111000000000000000",
  "1111111111111100001111111111111001111111000111111111100000011100000",
  "1111111111111110011111111111111011111110001111111111110000111111000",
  "0111111111111111111111111111111111111000111111111111110001111111100",
  "0011111111111111111111111111111111100001111111111111111011111111110",
  "0001111111111111111111111111111111000011111111111111111111111111110",
  "0000011111111111111111111111111111000001111111111111111111111111100",
  "0000001111111111111111111111111100000000111111111111111111111111000",
  "0000000111111111111111111111110000000000011111111111111111111100000",
  "0000000011111111111111111111000000000000001111111111111111100000000",
  "0000000001111111111111111100000000000000000111111111111100000000000",
  "0000000000111111111111100000000000000000000001111111000000000000000",
  "0000000000011111111100000000000000000000000000011000000000000000000",
  "0000000000001111000000000000000000000000000000000000000000000000000"
];

// Pseudo-random helper seeded by index for deterministic rendering across re-renders
function seededRandom(seed) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export default function NetworkBanner() {
  const dots = useMemo(() => {
    const cols = rows[0].length;
    const nrows = rows.length;
    const w = 700;
    const h = 340;
    const spacingX = w / cols;
    const spacingY = h / nrows;
    const dotList = [];
    let seed = 42;

    for (let r = 0; r < nrows; r++) {
      for (let c = 0; c < cols; c++) {
        if (rows[r][c] === '1' && seededRandom(seed++) > 0.25) {
          const cx = c * spacingX + spacingX / 2 + (seededRandom(seed++) - 0.5) * 3;
          const cy = r * spacingY + spacingY / 2 + (seededRandom(seed++) - 0.5) * 3;
          const delay = (seededRandom(seed++) * 1).toFixed(2);
          dotList.push({
            id: `${r}-${c}`,
            cx: cx.toFixed(1),
            cy: cy.toFixed(1),
            r: 1.6,
            delay
          });
        }
      }
    }
    return dotList;
  }, []);

  return (
    <section class="network-section">
      <div class="banner">
        {/* LEFT */}
        <div class="left">
          <h1>
            CONNECTING<br />THE WORLD
          </h1>
          <h2>ACROSS 100+ DESTINATIONS</h2>
          <p>
            AWT Australia has a strong global network of partners and offices to serve you wherever you are.
          </p>
          <button class="banner-btn" onClick={() => alert('Explore our network')}>
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
            </svg>
            EXPLORE OUR NETWORK
          </button>
        </div>

        {/* MAP */}
        <div class="map-wrap">
          <svg class="dotmap" viewBox="0 0 700 340" preserveAspectRatio="xMidYMid slice">
            {/* background dot grid */}
            <g id="dots">
              {dots.map((dot) => (
                <circle
                  key={dot.id}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={dot.r}
                  className="bg-dot"
                  style={{ animation: `fadeUp .01s ease-out ${dot.delay}s backwards` }}
                />
              ))}
            </g>

            {/* flight paths */}
            <g id="paths">
              <path class="flight flight-draw" d="M110,120 Q300,20 380,110" style={{ animationDelay: '.4s' }} />
              <path class="flight flight-draw" d="M380,110 Q480,150 560,260" style={{ animationDelay: '.9s' }} />
              <path class="flight flight-draw" d="M380,110 Q450,90 540,140" style={{ animationDelay: '1.3s' }} />
              <path class="flight flight-draw" d="M110,120 Q250,180 300,240" style={{ animationDelay: '1.7s' }} />
              <path class="flight flight-draw" d="M380,110 Q560,30 610,110" style={{ animationDelay: '2.1s' }} />
              <path class="flight flight-draw" d="M540,140 Q580,220 610,290" style={{ animationDelay: '2.5s' }} />
            </g>

            {/* hub cities */}
            <g class="hub">
              <circle class="hub-ring" cx="110" cy="120" r="5" />
              <circle class="hub-core" cx="110" cy="120" r="5" />
            </g>
            <g class="hub">
              <circle class="hub-ring" cx="380" cy="110" r="5" style={{ animationDelay: '.5s' }} />
              <circle class="hub-core" cx="380" cy="110" r="5" style={{ animationDelay: '.5s' }} />
            </g>
            <g class="hub">
              <circle class="hub-ring" cx="540" cy="140" r="5" style={{ animationDelay: '1s' }} />
              <circle class="hub-core" cx="540" cy="140" r="5" style={{ animationDelay: '1s' }} />
            </g>
          </svg>
        </div>

        {/* RIGHT FEATURES */}
        <div class="features">
          <div class="feature">
            <div class="icon-circle">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.4" />
              </svg>
            </div>
            <div>
              <h3>GLOBAL NETWORK</h3>
              <p>Offices in Australia, New Zealand, Sri Lanka and key destinations</p>
            </div>
          </div>

          <div class="feature">
            <div class="icon-circle">
              <svg viewBox="0 0 24 24">
                <path d="M4 13a8 8 0 0116 0" />
                <path d="M20 19a2 2 0 01-2 2h-1v-6h3z" />
                <path d="M4 19a2 2 0 002 2h1v-6H4z" />
              </svg>
            </div>
            <div>
              <h3>24/7 SUPPORT</h3>
              <p>Round-the-clock assistance wherever you are</p>
            </div>
          </div>

          <div class="feature">
            <div class="icon-circle">
              <svg viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4" />
                <rect x="3" y="4" width="18" height="16" rx="2" />
              </svg>
            </div>
            <div>
              <h3>TRUSTED PARTNERSHIPS</h3>
              <p>Working with leading airlines, hotels and travel partners</p>
            </div>
          </div>

          <div class="feature">
            <div class="icon-circle">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </div>
            <div>
              <h3>UNFORGETTABLE JOURNEYS</h3>
              <p>Creating memories that last a lifetime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
