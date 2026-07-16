const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

if(menuToggle && siteNav){
    menuToggle.addEventListener('click', () => {
        siteNav.classList.toggle('active');
    });

    // Close menu when a nav link is clicked (mobile UX)
    siteNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            siteNav.classList.remove('active');
        });
    });
}

/* Events Carousel - Simple scroll implementation */
const eventsTrack = document.getElementById('eventsTrack');
const eventsPrev = document.getElementById('eventsPrev');
const eventsNext = document.getElementById('eventsNext');

if(eventsTrack && eventsPrev && eventsNext){
    function getScrollAmount(){
        const card = eventsTrack.querySelector('.event-card');
        return card ? card.offsetWidth + 18 : 250;
    }

    eventsPrev.addEventListener('click', () => {
        eventsTrack.scrollLeft -= getScrollAmount();
    });

    eventsNext.addEventListener('click', () => {
        eventsTrack.scrollLeft += getScrollAmount();
    });
}
// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});