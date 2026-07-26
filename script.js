// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu after a link is clicked
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Highlight active section link on scroll
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

const highlightActiveLink = () => {
  let currentId = '';
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', highlightActiveLink, { passive: true });
highlightActiveLink();
