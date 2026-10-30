const basePath = new URL(document.currentScript.src).pathname.replace(/\/site\.js$/, '');
const dialogs = document.querySelectorAll('.media-dialog');

for (const dialog of dialogs) {
  const trigger = dialog.previousElementSibling;
  const closeButton = dialog.querySelector('.viewer-close');
  const zoomButton = dialog.querySelector('.viewer-actions button');
  const image = dialog.querySelector('.viewer-image');

  trigger.addEventListener('click', () => dialog.showModal());
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    image.classList.remove('is-zoomed');
    zoomButton.setAttribute('aria-pressed', 'false');
    zoomButton.textContent = 'Zoom in';
    trigger.focus({ preventScroll: true });
  });
  zoomButton.addEventListener('click', () => {
    const zoomed = image.classList.toggle('is-zoomed');
    zoomButton.setAttribute('aria-pressed', String(zoomed));
    zoomButton.textContent = zoomed ? 'Fit image' : 'Zoom in';
  });
}

const motion = matchMedia('(prefers-reduced-motion: reduce)');
const host = document.querySelector('#particles-js');
let loadPromise;

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
  }
}

motion.addEventListener('change', updateParticles);
updateParticles();