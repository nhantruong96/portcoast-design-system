import React from 'react';
import { Icon } from '../media/Icon.jsx';

export function ClauseRef({ standard, clause, title, href, tone = 'accent', style, ...rest }) {
  const tones = {
    accent: { bg: 'var(--surface-tint-accent)', line: 'var(--sky-200)', fg: 'var(--text-accent)' },
    brand: { bg: 'var(--surface-tint-brand)', line: 'var(--blue-100)', fg: 'var(--text-brand)' },
    inverse: { bg: 'rgba(255,255,255,.08)', line: 'var(--line-inverse)', fg: 'var(--sky-400)' },
  };
  const t = tones[tone] || tones.accent;
  const Tag = href ? 'a' : 'span';
  return (
    <Tag
      href={href}
      style={{
        display: 'inline-flex', alignItems: 'baseline', gap: 'var(--sp-2)',
        background: t.bg, border: '1px solid ' + t.line, borderRadius: 'var(--radius-xs)',
        padding: '5px 9px', font: 'var(--type-mono)', color: t.fg,
        textDecoration: 'none', ...style,
      }}
      {...rest}
    >
      <span style={{ alignSelf: 'center', display: 'inline-flex' }}><Icon name="book-marked" size={14} strokeWidth={2} /></span>
      <span style={{ fontWeight: 'var(--fw-semibold)' }}>{standard}</span>
      {clause ? <span style={{ opacity: 0.85 }}>{clause}</span> : null}
      {title ? <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>{title}</span> : null}
    </Tag>
  );
}
