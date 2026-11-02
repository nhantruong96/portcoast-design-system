import React from 'react';

export function PullQuote({ children, attribution, source, ground = 'blue', size = 'md', style, ...rest }) {
  const grounds = {
    blue: { bg: 'var(--action-primary)', fg: 'var(--white)', meta: 'var(--blue-100)', rule: 'rgba(255,255,255,.35)' },
    navy: { bg: 'var(--surface-inverse)', fg: 'var(--white)', meta: 'var(--navy-200)', rule: 'var(--cyan-500)' },
    paper: { bg: 'var(--surface-paper)', fg: 'var(--text-strong)', meta: 'var(--text-muted)', rule: 'var(--action-accent)' },
    none: { bg: 'transparent', fg: 'var(--text-strong)', meta: 'var(--text-muted)', rule: 'var(--action-accent)' },
  };
  const g = grounds[ground] || grounds.blue;
  const fonts = {
    sm: 'var(--fw-semibold) var(--fs-2xl)/1.22 var(--font-display)',
    md: 'var(--fw-bold) var(--fs-3xl)/1.16 var(--font-display)',
    lg: 'var(--fw-bold) var(--fs-4xl)/1.1 var(--font-display)',
  };
  return (
    <figure
      style={{
        margin: 0, background: g.bg, color: g.fg,
        padding: ground === 'none' ? 0 : 'var(--sp-10) var(--sp-12)',
        display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)', ...style,
      }}
      {...rest}
    >
      <blockquote style={{ margin: 0, font: fonts[size] || fonts.md, letterSpacing: 'var(--ls-tight)', maxWidth: 'var(--measure-narrow)', textWrap: 'balance' }}>
        {children}
      </blockquote>
      {attribution || source ? (
        <figcaption style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-1)', borderTop: '2px solid ' + g.rule, paddingTop: 'var(--sp-3)', alignSelf: 'flex-start', minWidth: 240 }}>
          {attribution ? <span style={{ font: 'var(--type-label)', letterSpacing: 'var(--ls-wide)' }}>{attribution}</span> : null}
          {source ? <span style={{ font: 'var(--type-mono)', fontSize: 'var(--fs-xs)', color: g.meta }}>{source}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
