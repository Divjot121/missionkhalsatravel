// Cache the DOM elements
const nlContainer = document.querySelector('.nl-container');
const menuBtn = document.querySelector('.fa-bars');
const navlist = document.querySelector('.navlist');

// Scroll event listener
window.addEventListener('scroll', () => {
    const scrolly = window.scrollY || document.documentElement.scrollTop;
    nlContainer.classList.toggle("scrolling", scrolly > 40);
});

// Menu button toggle
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-xmark');
    navlist.classList.toggle('active');
});

// ScrollReveal configuration
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
});

// Apply ScrollReveal on elements
sr.reveal('.nav-top', { delay: 222, origin: 'top' });
sr.reveal('.home .info', { delay: 444, origin: 'bottom' });
sr.reveal('.info .booking-form', { delay: 999, origin: 'right' });
sr.reveal('.works', { delay: 600, origin: 'top' });
sr.reveal('.about-container .image', { delay: 322, origin: 'left' });
sr.reveal('.about-container .content', { delay: 322, origin: 'right' });
sr.reveal('.services .title', { delay: 322, origin: 'top' });
sr.reveal('.services-container', { delay: 322, origin: 'bottom' });
sr.reveal('.cars-container', { delay: 800, origin: 'bottom' });
sr.reveal('.blog-container', { delay: 322, origin: 'left' });
sr.reveal('.poster', { delay: 322, origin: 'bottom' });
sr.reveal('.contact-aside', { delay: 322, origin: 'bottom' });
sr.reveal('.contact-form', { delay: 600, origin: 'right' });
sr.reveal('footer', { delay: 600, origin: 'top' });

  // Scroll animation for the section title
ScrollReveal().reveal('.services .title', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
  });

  // Animate each service card
  ScrollReveal().reveal('.services-container .card', {
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    interval: 200,
    reset: true
  });
