import React from 'react';
import { Icon } from '../media/Icon.jsx';

export function NotesPanel({ children, label = 'Ghi chú người trình bày', icon = 'pencil-line', width, style, ...rest }) {
  return (
    <aside
      style={{
        background: 'var(--surface-paper)', border: '1px solid var(--paper-500)',
        borderRadius: 'var(--radius-sm)', padding: 'var(--sp-4) var(--sp-5)',
        width, display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)', ...style,
      }}
      {...rest}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-2)', font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-widest)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        <Icon name={icon} size={14} strokeWidth={2} />
        {label}
      </span>
      <div style={{ font: 'var(--type-note)', color: 'var(--text-body)' }}>{children}</div>
    </aside>
  );
}
