import React from 'react';
import { Icon } from '../media/Icon.jsx';

const BOX = { sm: 30, md: 38, lg: 46 };
const GLYPH = { sm: 16, md: 19, lg: 22 };

const VARIANTS = {
  solid: { rest: 'var(--action-primary)', hover: 'var(--action-primary-hover)', active: 'var(--action-primary-active)', fg: 'var(--white)', border: 'transparent' },
  outline: { rest: 'var(--white)', hover: 'var(--surface-tint-brand)', active: 'var(--blue-100)', fg: 'var(--action-primary)', border: 'var(--line-default)' },
  ghost: { rest: 'transparent', hover: 'var(--surface-sunken)', active: 'var(--slate-200)', fg: 'var(--text-body)', border: 'transparent' },
  inverse: { rest: 'rgba(255,255,255,.10)', hover: 'rgba(255,255,255,.20)', active: 'rgba(255,255,255,.28)', fg: 'var(--white)', border: 'var(--line-inverse)' },
};

export function IconButton({ icon, label, variant = 'ghost', size = 'md', disabled = false, style, ...rest }) {
  const [state, setState] = React.useState('rest');
  const v = VARIANTS[variant] || VARIANTS.ghost;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => !disabled && setState('hover')}
      onMouseLeave={() => setState('rest')}
      onMouseDown={() => !disabled && setState('active')}
      onMouseUp={() => !disabled && setState('hover')}
      style={{
        width: BOX[size], height: BOX[size], display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: disabled ? 'var(--action-disabled-fg)' : v.fg,
        background: disabled ? 'var(--action-disabled-bg)' : v[state] || v.rest,
        border: '1px solid ' + (disabled ? 'transparent' : v.border),
        borderRadius: 'var(--radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-control)', padding: 0, ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={GLYPH[size]} />
    </button>
  );
}
