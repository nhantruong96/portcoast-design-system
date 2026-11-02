import React from 'react';

export function Tag({ children, tone = 'neutral', mono = false, onRemove, style, ...rest }) {
  const tones = {
    neutral: ['var(--surface-sunken)', 'var(--text-body)', 'var(--line-hairline)'],
    brand: ['var(--surface-tint-brand)', 'var(--text-brand)', 'var(--blue-100)'],
    accent: ['var(--surface-tint-accent)', 'var(--text-accent)', 'var(--cyan-200)'],
    paper: ['var(--surface-paper)', 'var(--text-body)', 'var(--paper-500)'],
  };
  const [bg, fg, line] = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-2)',
        padding: '4px 8px', background: bg, color: fg,
        border: '1px solid ' + line, borderRadius: 'var(--radius-xs)',
        font: mono ? 'var(--type-mono)' : 'var(--type-body-sm)', ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove ? (
        <button
          type="button" onClick={onRemove} aria-label="Remove"
          style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'var(--type-mono)', lineHeight: 1, opacity: 0.65 }}
        >
          ×
        </button>
      ) : null}
    </span>
  );
}
