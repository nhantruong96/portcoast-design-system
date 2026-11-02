import React from 'react';

const LUCIDE_SRC = 'https://unpkg.com/lucide@0.544.0/dist/umd/lucide.js';

function ensureLucide(cb) {
  if (window.lucide && window.lucide.createIcons) return cb();
  let tag = document.querySelector('script[data-lucide-loader]');
  if (!tag) {
    tag = document.createElement('script');
    tag.src = LUCIDE_SRC;
    tag.setAttribute('data-lucide-loader', '');
    document.head.appendChild(tag);
  }
  tag.addEventListener('load', cb);
  if (window.lucide) cb();
}

export function Icon({ name, size = 20, strokeWidth = 1.75, label, style, ...rest }) {
  const host = React.useRef(null);
  React.useEffect(() => {
    let dead = false;
    const paint = () => {
      const el = host.current;
      if (dead || !el || !window.lucide) return;
      el.innerHTML = '';
      const slot = document.createElement('i');
      slot.setAttribute('data-lucide', name);
      el.appendChild(slot);
      window.lucide.createIcons({ nameAttr: 'data-lucide' });
      const svg = el.querySelector('svg');
      if (svg) {
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
        svg.setAttribute('stroke-width', strokeWidth);
        svg.style.display = 'block';
      }
    };
    ensureLucide(paint);
    return () => { dead = true; };
  }, [name, size, strokeWidth]);

  return (
    <span
      ref={host}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ display: 'inline-flex', width: size, height: size, flex: '0 0 auto', color: 'currentColor', ...style }}
      {...rest}
    />
  );
}
