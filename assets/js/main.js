(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const storedTheme = localStorage.getItem('jgm-theme');
  if (storedTheme) root.dataset.theme = storedTheme;
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.dataset.theme = 'dark';

  const setThemeIcon = () => {
    if (!themeButton) return;
    const dark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    themeButton.textContent = dark ? '☀' : '◐';
  };
  setThemeIcon();

  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('jgm-theme', root.dataset.theme);
    setThemeIcon();
  });

  menuButton?.addEventListener('click', () => {
    const open = nav?.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(Boolean(open)));
  });

  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav?.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      menuButton?.setAttribute('aria-expanded', 'false');
      menuButton?.focus();
    }
  });

  const progress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max <= 0 ? 0 : (window.scrollY / max) * 100;
    root.style.setProperty('--scroll-progress', `${Math.min(100, Math.max(0, p))}%`);
  };
  progress();
  window.addEventListener('scroll', progress, { passive: true });

  document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());

  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('[data-nav-links] a').forEach(a => {
    const href = new URL(a.href, location.href).pathname.replace(/\/$/, '') || '/';
    if (href === path) a.setAttribute('aria-current', 'page');
  });

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterCards = document.querySelectorAll('[data-filter-card]');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const value = button.dataset.filter;
    filterButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    filterCards.forEach(card => {
      const tags = (card.dataset.filterCard || '').split(' ');
      card.hidden = value !== 'all' && !tags.includes(value);
    });
  }));

  document.querySelectorAll('[data-copy-email]').forEach(button => {
    button.addEventListener('click', async () => {
      const email = button.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        const old = button.textContent;
        button.textContent = 'Copied';
        setTimeout(() => button.textContent = old, 1500);
      } catch {
        location.href = `mailto:${email}`;
      }
    });
  });

  document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
})();
