import React from 'react';
import { Icon } from './Icon.jsx';

export function ImagePlaceholder({ label = 'Image', note, ratio = '4 / 3', tone = 'tint', icon = 'image', style, ...rest }) {
  const grounds = {
    tint: { background: 'var(--surface-tint)', color: 'var(--indigo-600)', border: '1px dashed var(--line-strong)' },
    paper: { background: 'var(--surface-paper)', color: 'var(--slate-500)', border: '1px dashed var(--line-default)' },
    inverse: { background: 'var(--surface-inverse-alt)', color: 'var(--text-inverse-muted)', border: '1px dashed var(--line-inverse)' },
  };
  return (
    <div
      style={{
        aspectRatio: ratio, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: 'var(--sp-2)', textAlign: 'center', padding: 'var(--sp-4)',
        borderRadius: 'var(--radius-sm)', ...grounds[tone], ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={26} strokeWidth={1.5} />
      <span style={{ font: 'var(--type-label)', letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase' }}>{label}</span>
      {note ? <span style={{ font: 'var(--type-body-sm)', maxWidth: '34ch' }}>{note}</span> : null}
    </div>
  );
}
