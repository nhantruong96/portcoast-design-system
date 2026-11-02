import React from 'react';

export function NumberTile({ number, title, children, ground = 'white', numberTone, style, ...rest }) {
  const grounds = {
    white: { bg: 'var(--surface-card)', border: 'var(--border-hairline)', title: 'var(--text-strong)', body: 'var(--text-body)', num: 'var(--slide-index)' },
    paper: { bg: 'var(--surface-paper)', border: '1px solid var(--paper-500)', title: 'var(--text-strong)', body: 'var(--text-body)', num: 'var(--paper-500)' },
    tint: { bg: 'var(--surface-tint)', border: '1px solid var(--navy-100)', title: 'var(--text-strong)', body: 'var(--text-body)', num: 'var(--navy-200)' },
    inverse: { bg: 'var(--surface-inverse-alt)', border: 'var(--border-inverse)', title: 'var(--white)', body: 'var(--text-inverse-muted)', num: 'var(--cyan-400)' },
  };
  const g = grounds[ground] || grounds.white;
  return (
    <div
      style={{
        background: g.bg, border: g.border, borderRadius: 'var(--radius-md)',
        padding: 'var(--sp-4) var(--sp-5)', display: 'flex', gap: 'var(--sp-4)',
        alignItems: 'flex-start', ...style,
      }}
      {...rest}
    >
      <span style={{ font: 'var(--fw-black) var(--fs-2xl)/0.92 var(--font-display)', letterSpacing: 'var(--ls-tighter)', color: numberTone || g.num, flex: '0 0 auto', fontVariantNumeric: 'tabular-nums' }}>
        {number}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-1)', minWidth: 0 }}>
        <strong style={{ font: 'var(--type-h5)', color: g.title }}>{title}</strong>
        {children ? <div style={{ font: 'var(--type-body-sm)', color: g.body }}>{children}</div> : null}
      </div>
    </div>
  );
}
