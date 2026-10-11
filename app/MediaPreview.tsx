'use client';

import Image from 'next/image';
import { useId, useRef, useState, type ReactNode } from 'react';

type Props = {
  src: string;
  title: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  downloadHref?: string;
  children: ReactNode;
};

export default function MediaPreview({ src, title, alt, width, height, className, downloadHref, children }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [zoomed, setZoomed] = useState(false);

  return <>
    <button ref={trigger} type="button" className={`media-trigger ${className}`} aria-haspopup="dialog" aria-label={`View ${title}`} onClick={() => dialog.current?.showModal()}>
      {children}
      <span className="preview-hint" aria-hidden="true">View larger <span>+</span></span>
    </button>
    <dialog ref={dialog} className="media-dialog" aria-labelledby={titleId}
      onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
      onClose={() => { setZoomed(false); trigger.current?.focus({ preventScroll: true }); }}>
      <div className="viewer-panel">
        <div className="viewer-header"><h2 id={titleId}>{title}</h2><button type="button" className="viewer-close" onClick={() => dialog.current?.close()}>Close <span aria-hidden="true">×</span></button></div>
        <div className={`viewer-image${zoomed ? ' is-zoomed' : ''}`}>
          <Image src={src} alt={alt} width={width} height={height} unoptimized />
        </div>
        <div className="viewer-actions">
          <button type="button" className="button outline" aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>{zoomed ? 'Fit image' : 'Zoom in'}</button>
          {downloadHref && <a className="button primary" href={downloadHref} download>Download PDF <span aria-hidden="true">↓</span></a>}
        </div>
      </div>
    </dialog>
  </>;
}
