(function () {
  const NAV_ITEMS = [
    { href: 'index.html', label: 'Home', page: 'home' },
    { href: 'about.html', label: 'About', page: 'about' },
    { href: 'work.html', label: 'Work', page: 'work' },
    { href: 'skills.html', label: 'Skills', page: 'skills' },
    { href: 'life.html', label: 'Life', page: 'life' },
    { href: 'experience.html', label: 'Experience', page: 'experience' },
    { href: 'contact.html', label: 'Contact', page: 'contact' },
  ];

  const currentPage = document.body.dataset.page || 'home';

  function renderHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    const links = NAV_ITEMS.map(
      (item) =>
        `<a href="${item.href}" class="nav-link${item.page === currentPage ? ' active' : ''}">${item.label}</a>`
    ).join('');

    header.innerHTML = `
      <header class="nav-header">
        <div class="nav-container">
          <a href="index.html" class="logo" aria-label="Home">
            <span class="logo-mark">D</span>
            <span class="logo-text">Dinal</span>
          </a>
          <nav class="nav-menu" aria-label="Main">${links}</nav>
          <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>`;
  }

  function renderFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const year = new Date().getFullYear();
    footer.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <a href="index.html" class="footer-brand">Dinal Dholiya</a>
            <p class="footer-text">© ${year} Dinal Dholiya</p>
            <div class="footer-links">
              <a href="https://www.linkedin.com/in/dinal-dholiya/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/DINAL11" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </footer>`;
  }

  function initNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    let lastScroll = 0;
    const headerEl = document.querySelector('.nav-header');

    window.addEventListener(
      'scroll',
      () => {
        const y = window.pageYOffset;
        if (!headerEl) return;
        if (y <= 8) {
          headerEl.classList.remove('scroll-down', 'scrolled');
          lastScroll = y;
          return;
        }
        headerEl.classList.add('scrolled');
        if (y > lastScroll && y > 80) {
          headerEl.classList.add('scroll-down');
        } else {
          headerEl.classList.remove('scroll-down');
        }
        lastScroll = y;
      },
      { passive: true }
    );
  }

  function initReveal() {
    const targets = document.querySelectorAll('.reveal, .page-section, section');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
  }

  function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    });
  }

  function initPageTransition() {
    if (!document.startViewTransition) return;
    document.querySelectorAll('a[href]').forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('http') ||
        href.startsWith('mailto') ||
        anchor.target === '_blank' ||
        href.includes('://')
      ) {
        return;
      }
      anchor.addEventListener('click', (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        document.startViewTransition(() => {
          window.location.href = href;
        });
      });
    });
  }

  renderHeader();
  renderFooter();
  initNav();
  initReveal();
  initContactForm();
  initPageTransition();
})();
