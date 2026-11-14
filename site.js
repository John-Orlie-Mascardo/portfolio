const basePath = new URL(document.currentScript.src).pathname.replace(/\/site\.js$/, '');
const dialogs = document.querySelectorAll('.media-dialog');

const sidebar = document.querySelector('.portfolio-sidebar');
const menuToggle = sidebar?.querySelector('.mobile-nav-toggle');
const sectionNav = sidebar?.querySelector('.sidebar-nav');
const menuBar = sidebar?.querySelector('.mobile-nav-bar');
const menuClose = sidebar?.querySelector('.mobile-nav-close');
const menuBackdrop = sidebar?.querySelector('.mobile-nav-backdrop');
const portfolioContent = document.querySelector('.portfolio-content');

if (sidebar && menuToggle && sectionNav && menuBar && menuClose && menuBackdrop) {
  sidebar.classList.add('mobile-nav-ready');

  const setMenuOpen = (isOpen, restoreFocus = false) => {
    sidebar.classList.toggle('mobile-nav-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', `${isOpen ? 'Close' : 'Open'} navigation menu`);
    menuBar.inert = isOpen;
    if (portfolioContent) portfolioContent.inert = isOpen;
    if (isOpen) menuClose.focus({ preventScroll: true });
    if (restoreFocus) menuToggle.focus({ preventScroll: true });
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
  sectionNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false, true);
  });
  menuClose.addEventListener('click', () => setMenuOpen(false, true));
  menuBackdrop.addEventListener('click', () => setMenuOpen(false, true));
  document.addEventListener('keydown', (event) => {
    if (menuToggle.getAttribute('aria-expanded') !== 'true') return;
    if (event.key === 'Escape') {
      setMenuOpen(false, true);
      return;
    }
    if (event.key === 'Tab') {
      const focusable = [...sectionNav.querySelectorAll('button:not(:disabled), a[href]')];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  matchMedia('(min-width: 981px)').addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });
}

for (const dialog of dialogs) {
  const trigger = dialog.closest('figure, article')?.querySelector('.media-trigger, .qa-sample-trigger');
  const closeButton = dialog.querySelector('.viewer-close');

  if (trigger && typeof dialog.showModal === 'function') {
    trigger.addEventListener('click', () => dialog.showModal());
    dialog.addEventListener('close', () => {
      if (trigger.isConnected) trigger.focus({ preventScroll: true });
    });
  }
  if (closeButton && typeof dialog.close === 'function') {
    closeButton.addEventListener('click', () => dialog.close());
  }
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog && typeof dialog.close === 'function') dialog.close();
  });
}

const motion = matchMedia('(prefers-reduced-motion: reduce)');
const host = document.querySelector('#particles-js');
let loadPromise;
let initializing = false;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}

async function updateParticles() {
  if (motion.matches) {
    if (window.pJSDom?.length) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }
    return;
  }
  if (initializing) return;

  initializing = true;
  try {
    loadPromise ??= Promise.all([
      loadScript(`${basePath}/vendor/particles.2.0.0.min.js`),
      fetch(`${basePath}/vendor/particles-config.json`).then((response) => {
        if (!response.ok) throw new Error('Particle config unavailable');
        return response.json();
      }),
    ]);
    const [, config] = await loadPromise;
    if (motion.matches || window.pJSDom?.length) return;
    // Listen on the window so the decorative canvas never blocks page links.
    config.interactivity.detect_on = 'window';
    window.particlesJS(host.id, config);
  } catch (error) {
    console.warn('Animated background unavailable:', error);
  } finally {
    initializing = false;
  }
}

motion.addEventListener('change', updateParticles);
updateParticles();

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const status = document.querySelector('#contact-form-status');
  const originalButtonText = submitButton.textContent;

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const captchaToken = contactForm.querySelector('textarea[name="h-captcha-response"]')?.value.trim();
    if (!captchaToken) {
      status.setAttribute('role', 'alert');
      status.dataset.state = 'error';
      status.textContent = 'Please complete the security check before sending your message.';
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
    status.setAttribute('role', 'status');
    status.dataset.state = 'sending';
    status.textContent = 'Sending your message…';

    try {
      const formData = new FormData(contactForm);
      formData.set('h-captcha-response', captchaToken);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || result?.body?.message || 'Your message could not be sent. Please try again.');
      }

      contactForm.reset();
      status.setAttribute('role', 'status');
      status.dataset.state = 'success';
      status.textContent = 'Thanks — your message has been sent.';
    } catch (error) {
      status.setAttribute('role', 'alert');
      status.dataset.state = 'error';
      status.textContent = error.message || 'Something went wrong. Please try again.';
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}
