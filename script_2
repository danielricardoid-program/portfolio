/* ============================================================
   DANIEL RICARDO — Portfolio Scripts
   Scroll Animations + Typing Effect + Lang Toggle
   ============================================================ */

/* === LANGUAGE TOGGLE === */
function setLang(lang) {
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.textContent.toLowerCase() === lang)
  );
  document.querySelectorAll('[data-en]').forEach(el => {
    const txt = el.getAttribute('data-' + lang);
    if (txt) el.textContent = txt;
  });
  const copy = document.getElementById('footer-copy');
  if (copy) copy.textContent = lang === 'id'
    ? '© 2026 Daniel Ricardo. Hak cipta dilindungi.'
    : '© 2026 Daniel Ricardo. All rights reserved.';
}

/* === TYPING EFFECT === */
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const phrases = [
    'Math Olympian.',
    'Problem Solver.',
    'Future IT Student.',
    'Physics Enthusiast.',
    'Gold Medalist.'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let pauseCounter = 0;

  function type() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
      setTimeout(type, 80);
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 40);
    }
  }

  setTimeout(type, 800);
}

/* === SCROLL REVEAL === */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

/* === NAVBAR SCROLL EFFECT === */
function initNavbar() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.borderBottomColor = 'rgba(10,10,10,0.15)';
    } else {
      nav.style.borderBottomColor = 'rgba(10,10,10,0.12)';
    }
  }, { passive: true });
}

/* === SKILL BAR ANIMATION === */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        if (width) {
          setTimeout(() => { bar.style.width = width; }, 200);
        }
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => {
    const currentWidth = bar.style.width;
    bar.setAttribute('data-width', currentWidth);
    bar.style.width = '0%';
    observer.observe(bar);
  });
}

/* === INIT === */
document.addEventListener('DOMContentLoaded', () => {
  initTyping();
  initScrollReveal();
  initNavbar();
  initSkillBars();
  initSmoothScroll();
  initActiveNav();
});

/* === SMOOTH SCROLL === */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      const navHeight = document.querySelector('nav')?.offsetHeight || 64;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 24;

      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    });
  });
}

/* === ACTIVE NAV HIGHLIGHT === */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const navHeight = document.querySelector('nav')?.offsetHeight || 64;

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 80;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.color = '';
      link.style.fontWeight = '500';
      if (link.getAttribute('href') === '#' + current) {
        link.style.color = 'var(--black)';
        link.style.fontWeight = '700';
      }
    });
  }, { passive: true });
}
