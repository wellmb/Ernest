(function () {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  // Header scroll state
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Mobile menu
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Scroll reveal
  const revealElements = document.querySelectorAll(
    '.section-label, .section-title, .about-text, .value-card, .mood-item, .trait, .contact-inner > *'
  );

  revealElements.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));

  // Stagger value cards
  document.querySelectorAll('.value-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  // Contact form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    formNote.hidden = false;
    setTimeout(() => {
      formNote.hidden = true;
    }, 4000);
  });
})();
