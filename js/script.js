/* ===========================
   MOBILE MENU TOGGLE
=========================== */
const navClose = document.getElementById('navClose');
const siteNav = document.getElementById('siteNav');
const menuToggle = document.getElementById('menuToggle');

function openMobileNav() {
    siteNav.classList.add('active');
    menuToggle.classList.add('open');
    document.body.classList.add('nav-open');
    document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
    siteNav.classList.remove('active');
    menuToggle.classList.remove('open');
    document.body.classList.remove('nav-open');
    document.body.style.overflow = '';
}

if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
        if (siteNav.classList.contains('active')) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

    siteNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMobileNav);
    });
}

if (navClose && siteNav && menuToggle) {
    navClose.addEventListener('click', closeMobileNav);
}

/* ===========================
   EVENTS CAROUSEL (about.html)
=========================== */
const eventsTrack = document.getElementById('eventsTrack');
const eventsPrev  = document.getElementById('eventsPrev');
const eventsNext  = document.getElementById('eventsNext');

if (eventsTrack && eventsPrev && eventsNext) {
    const eventsAmount = () => {
        const card = eventsTrack.querySelector('.event-card');
        return card ? card.offsetWidth + 18 : 250;
    };
    eventsPrev.addEventListener('click', () => eventsTrack.scrollBy({ left: -eventsAmount(), behavior: 'smooth' }));
    eventsNext.addEventListener('click', () => eventsTrack.scrollBy({ left:  eventsAmount(), behavior: 'smooth' }));
}

/* ===========================
   DESTINATIONS CAROUSEL (index.html)
=========================== */
const destTrack = document.getElementById('destTrack');
const destPrev  = document.getElementById('destPrev');
const destNext  = document.getElementById('destNext');

if (destTrack && destPrev && destNext) {

    const destAmount = () => {
        const card = destTrack.querySelector('.dest-card');
        return card ? card.offsetWidth + 18 : 260;
    };

   function updateDestArrows() {
    const maxScroll = destTrack.scrollWidth - destTrack.clientWidth;
    destPrev.disabled = destTrack.scrollLeft <= 1;
    destNext.disabled = destTrack.scrollLeft >= maxScroll - 1;
}

    destPrev.addEventListener('click', () => destTrack.scrollBy({ left: -destAmount(), behavior: 'smooth' }));
    destNext.addEventListener('click', () => destTrack.scrollBy({ left:  destAmount(), behavior: 'smooth' }));

    destTrack.addEventListener('scroll', updateDestArrows);
    window.addEventListener('resize', updateDestArrows);
    window.addEventListener('load',   updateDestArrows);
    updateDestArrows();

    /* Reveal cards + trust items on scroll */
    const revealTargets = document.querySelectorAll('.dest-card, .trust-item');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    revealTargets.forEach(el => revealObserver.observe(el));

    setTimeout(() => destNext.classList.add('pulse'), 1200);
}