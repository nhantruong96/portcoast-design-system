import React from 'react';
import { Icon } from '../media/Icon.jsx';

const TONES = {
  brand: { solid: ['var(--action-primary)', 'var(--white)'], soft: ['var(--surface-tint-brand)', 'var(--text-brand)'], line: 'var(--blue-300)' },
  accent: { solid: ['var(--cyan-600)', 'var(--white)'], soft: ['var(--surface-tint-accent)', 'var(--text-accent)'], line: 'var(--cyan-200)' },
  signal: { solid: ['var(--action-signal)', 'var(--white)'], soft: ['var(--surface-tint-signal)', 'var(--text-signal)'], line: 'var(--signal-300)' },
  success: { solid: ['var(--green-500)', 'var(--white)'], soft: ['var(--surface-success)', 'var(--text-success)'], line: 'var(--green-500)' },
  warning: { solid: ['var(--amber-500)', 'var(--white)'], soft: ['var(--surface-warning)', 'var(--text-warning)'], line: 'var(--amber-500)' },
  danger: { solid: ['var(--red-500)', 'var(--white)'], soft: ['var(--surface-danger)', 'var(--text-danger)'], line: 'var(--red-500)' },
  neutral: { solid: ['var(--navy-900)', 'var(--white)'], soft: ['var(--surface-sunken)', 'var(--text-body)'], line: 'var(--line-default)' },
};

export function Badge({ children, tone = 'neutral', variant = 'soft', icon, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  const [bg, fg] = variant === 'solid' ? t.solid : variant === 'soft' ? t.soft : ['transparent', t.soft[1]];
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-1)',
        padding: icon ? '4px 10px 4px 8px' : '4px 10px',
        font: 'var(--type-label)', letterSpacing: 'var(--ls-wide)',
        color: fg, background: bg,
        border: '1px solid ' + (variant === 'outline' ? t.line : 'transparent'),
        borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={13} strokeWidth={2} /> : null}
      {children}
    </span>
  );
}
