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