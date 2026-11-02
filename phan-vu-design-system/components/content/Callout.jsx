import React from 'react';
import { Icon } from '../media/Icon.jsx';

const KINDS = {
  note: { label: 'Ghi chú', icon: 'pencil-line', bg: 'var(--surface-paper)', edge: 'var(--paper-500)', fg: 'var(--text-body)', head: 'var(--text-strong)' },
  activity: { label: 'Hoạt động', icon: 'users', bg: 'var(--surface-tint-signal)', edge: 'var(--action-signal)', fg: 'var(--slate-700)', head: 'var(--text-signal)' },
  discussion: { label: 'Thảo luận', icon: 'messages-square', bg: 'var(--surface-tint-accent)', edge: 'var(--action-accent)', fg: 'var(--slate-700)', head: 'var(--text-accent)' },
  standard: { label: 'Tiêu chuẩn áp dụng', icon: 'book-open-text', bg: 'var(--surface-tint-brand)', edge: 'var(--action-primary)', fg: 'var(--slate-700)', head: 'var(--text-brand)' },
  warning: { label: 'Cẩn trọng', icon: 'triangle-alert', bg: 'var(--surface-warning)', edge: 'var(--amber-500)', fg: 'var(--amber-700)', head: 'var(--text-warning)' },
};

export function Callout({ children, kind = 'note', title, label, style, ...rest }) {
  const k = KINDS[kind] || KINDS.note;
  return (
    <div
      style={{
        background: k.bg, color: k.fg,
        borderLeft: 'var(--bw-marker) solid ' + k.edge,
        borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
        padding: 'var(--sp-4) var(--sp-5)',
        display: 'flex', gap: 'var(--sp-3)', ...style,
      }}
      {...rest}
    >
      <span style={{ color: k.head, marginTop: 1 }}><Icon name={k.icon} size={19} /></span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-15)', minWidth: 0 }}>
        <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-widest)', textTransform: 'uppercase', color: k.head }}>
          {label || k.label}
        </span>
        {title ? <strong style={{ font: 'var(--type-h5)', color: 'var(--text-strong)' }}>{title}</strong> : null}
        <div style={{ font: 'var(--type-body-sm)' }}>{children}</div>
      </div>
    </div>
  );
}
