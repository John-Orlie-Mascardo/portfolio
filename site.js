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
const toggle = document.querySelector('.animation-toggle');
const host = document.querySelector('.halo-canvas');
let paused = false;
let effect;
let failed = false;
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

function destroyHalo() {
  if (!effect) return;
  const { renderer, bufferTarget, bufferFeedback } = effect;
  effect.destroy();
  bufferTarget?.dispose();
  bufferFeedback?.dispose();
  renderer?.dispose();
  renderer?.forceContextLoss();
  effect = undefined;
}

async function updateHalo() {
  toggle.hidden = motion.matches || failed;
  if (motion.matches || paused || failed) {
    destroyHalo();
    return;
  }
  try {
    loadPromise ??= (async () => {
      await loadScript(`${basePath}/vendor/three.r134.min.js`);
      await loadScript(`${basePath}/vendor/vanta.halo.0.5.24.min.js`);
    })();
    await loadPromise;
    if (motion.matches || paused || effect) return;
    effect = window.VANTA.HALO({
      el: host,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      backgroundColor: 0x14141e,
      baseColor: 0x001a59,
      xOffset: 0.12,
      scale: 1.5,
      scaleMobile: 2,
    });
  } catch {
    failed = true;
    toggle.hidden = true;
    destroyHalo();
  }
}

toggle.addEventListener('click', () => {
  paused = !paused;
  toggle.setAttribute('aria-pressed', String(paused));
  toggle.innerHTML = paused
    ? 'Play background <span aria-hidden="true">▶</span>'
    : 'Pause background <span aria-hidden="true">Ⅱ</span>';
  updateHalo();
});
motion.addEventListener('change', updateHalo);
updateHalo();
