'use client';

import Script from 'next/script';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { assetPath } from './asset-path';

const motionQuery = '(prefers-reduced-motion: reduce)';
function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}
function prefersReducedMotion() { return window.matchMedia(motionQuery).matches; }
type Disposable = { dispose: () => void };
type HaloEffect = {
  destroy: () => void;
  renderer?: Disposable & { forceContextLoss: () => void };
  bufferTarget?: Disposable;
  bufferFeedback?: Disposable;
};
type HaloWindow = Window & { VANTA?: { HALO: (options: Record<string, unknown>) => HaloEffect } };

export default function HaloBackground() {
  const host = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(subscribeMotion, prefersReducedMotion, () => true);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const [threeReady, setThreeReady] = useState(false);
  const [haloReady, setHaloReady] = useState(false);
  const enabled = !reducedMotion && !paused && !failed;

  useEffect(() => {
    if (!enabled || !haloReady || !host.current) return;
    let effect: HaloEffect | undefined;
    try {
      effect = (window as HaloWindow).VANTA?.HALO({
        el: host.current,
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
      // Keep the static background if WebGL is unavailable.
    }
    return () => {
      if (!effect) return;
      // Vanta clears these references without releasing their GPU resources.
      const { renderer, bufferTarget, bufferFeedback } = effect;
      effect.destroy();
      bufferTarget?.dispose();
      bufferFeedback?.dispose();
      renderer?.dispose();
      renderer?.forceContextLoss();
    };
  }, [enabled, haloReady]);

  return <>
    <div className="halo-background" aria-hidden="true"><div className="halo-canvas" ref={host} /></div>
    {!reducedMotion && !failed && <button className="animation-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? 'Play background' : 'Pause background'} <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span></button>}
    {enabled && <>
      <Script id="halo-three" src={assetPath('/vendor/three.r134.min.js')} onReady={() => setThreeReady(true)} onError={() => setFailed(true)} />
      {threeReady && <Script id="vanta-halo" src={assetPath('/vendor/vanta.halo.0.5.24.min.js')} onReady={() => setHaloReady(true)} onError={() => setFailed(true)} />}
    </>}
  </>;
}
