// define variables
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navIcon = document.getElementById('nav-icon');
const backToTopButton = document.querySelector('[data-toggle="back-to-top"]');


// display and hide nav menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    // Handle nav menu icon
    if (navMenu.classList.contains('show')) {
        header.classList.add('nav-sticky');
        navToggle.setAttribute('aria-label', 'Close Menu');
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-times');
    } else {
        navToggle.setAttribute('aria-label', 'Open Menu');
        navIcon.classList.remove('fa-times');
        navIcon.classList.add('fa-bars');
    }
});


// add class to header on scroll
// and add class to back to top button on scroll
window.addEventListener('scroll', () => {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 60) {
        header.classList.add('nav-sticky');
        backToTopButton.classList.replace('-bottom-10', 'bottom-5');
    } else {
        header.classList.remove('nav-sticky');
        backToTopButton.classList.replace('bottom-5', '-bottom-10');
    }
});

// Back to top button
backToTopButton.addEventListener('click', function () {
    // Scroll smoothly to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});