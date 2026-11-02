import React from 'react';

const GROUNDS = {
  white: { background: 'var(--surface-card)', color: 'var(--text-body)', border: 'var(--border-hairline)' },
  paper: { background: 'var(--surface-paper)', color: 'var(--text-body)', border: '1px solid var(--paper-500)' },
  tint: { background: 'var(--surface-tint)', color: 'var(--text-body)', border: '1px solid var(--navy-100)' },
  inverse: { background: 'var(--surface-inverse-alt)', color: 'var(--text-inverse-muted)', border: 'var(--border-inverse)' },
};

const PADS = { sm: 'var(--sp-4)', md: 'var(--pad-card)', lg: 'var(--pad-card-lg)' };

export function Card({ children, title, eyebrow, footer, ground = 'white', pad = 'md', elevation = 'none', accent, style, ...rest }) {
  const g = GROUNDS[ground] || GROUNDS.white;
  const shadow = { none: 'var(--shadow-none)', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)' }[elevation];
  const accentColors = { brand: 'var(--action-primary)', accent: 'var(--action-accent)', signal: 'var(--action-signal)', navy: 'var(--navy-900)' };
  const inverse = ground === 'inverse';
  return (
    <div
      style={{
        background: g.background, color: g.color, border: g.border,
        borderTop: accent ? 'var(--bw-rule) solid ' + (accentColors[accent] || accent) : g.border,
        borderRadius: 'var(--radius-md)', boxShadow: shadow, padding: PADS[pad] || PADS.md,
        display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', ...style,
      }}
      {...rest}
    >
      {eyebrow ? (
        <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-widest)', textTransform: 'uppercase', color: inverse ? 'var(--cyan-400)' : 'var(--text-accent)' }}>{eyebrow}</span>
      ) : null}
      {title ? (
        <h4 style={{ font: 'var(--type-h4)', color: inverse ? 'var(--white)' : 'var(--text-strong)', margin: 0 }}>{title}</h4>
      ) : null}
      {children}
      {footer ? (
        <div style={{ marginTop: 'var(--sp-2)', paddingTop: 'var(--sp-3)', borderTop: inverse ? 'var(--border-inverse)' : 'var(--border-hairline)', font: 'var(--type-body-sm)', color: inverse ? 'var(--navy-400)' : 'var(--text-muted)' }}>{footer}</div>
      ) : null}
    </div>
  );
}
