const basePath = new URL(document.currentScript.src).pathname.replace(/\/site\.js$/, '');
const dialogs = document.querySelectorAll('.media-dialog');

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
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
    status.setAttribute('role', 'status');
    status.dataset.state = 'sending';
    status.textContent = 'Sending your message…';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
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
