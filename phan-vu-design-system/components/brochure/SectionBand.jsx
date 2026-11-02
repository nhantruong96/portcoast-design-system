import React from 'react';

const TONES = {
  blue: { band: 'var(--action-primary)', d1: 'var(--blue-600)', d2: 'var(--blue-700)', d3: 'var(--sky-500)' },
  indigo: { band: 'var(--indigo-700)', d1: 'var(--indigo-700)', d2: 'var(--indigo-800)', d3: 'var(--blue-600)' },
};

export function SectionBand({ title, subtitle, tone = 'blue', diamonds = true, width = '62%', style, ...rest }) {
  const t = TONES[tone] || TONES.blue;
  const d = (x, y, s, fill, outline) => (
    <span aria-hidden="true" style={{
      position: 'absolute', left: x, top: y, width: s, height: s,
      transform: 'rotate(45deg)', borderRadius: 'var(--radius-diamond)',
      background: outline ? 'var(--white)' : fill,
      border: outline ? 'var(--bw-rule) solid ' + fill : 'none',
    }} />
  );
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', minHeight: 96, ...style }} {...rest}>
      <div style={{
        background: t.band, color: 'var(--white)', width, minWidth: 280,
        padding: 'var(--sp-4) var(--sp-16) var(--sp-4) var(--sp-8)',
        clipPath: 'polygon(0 0, calc(100% - 48px) 0, 100% 50%, calc(100% - 48px) 100%, 0 100%)',
        display: 'flex', flexDirection: 'column', gap: 'var(--sp-05)',
      }}>
        <span style={{ font: 'var(--type-band)', letterSpacing: 'var(--ls-tight)', textTransform: 'uppercase' }}>{title}</span>
        {subtitle ? <span style={{ font: 'var(--type-band-sub)', textTransform: 'uppercase', color: 'var(--blue-050)' }}>{subtitle}</span> : null}
      </div>
      {diamonds ? (
        <div style={{ position: 'relative', width: 120, height: 96, marginLeft: -40, flex: '0 0 auto' }}>
          {d(10, 22, 46, t.d1, true)}
          {d(58, 0, 28, t.d2)}
          {d(62, 52, 38, t.d3)}
        </div>
      ) : null}
    </div>
  );
}
