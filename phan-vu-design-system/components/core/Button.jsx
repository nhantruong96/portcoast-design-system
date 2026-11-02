import React from 'react';
import { Icon } from '../media/Icon.jsx';

const SIZES = {
  sm: { padding: '7px 14px', font: 'var(--fw-semibold) var(--fs-sm)/1 var(--font-sans)', gap: 'var(--sp-15)', icon: 15 },
  md: { padding: '11px 20px', font: 'var(--fw-semibold) var(--fs-base)/1 var(--font-sans)', gap: 'var(--sp-2)', icon: 17 },
  lg: { padding: '14px 26px', font: 'var(--fw-semibold) var(--fs-md)/1 var(--font-sans)', gap: 'var(--sp-2)', icon: 19 },
};

const VARIANTS = {
  primary: { rest: 'var(--action-primary)', hover: 'var(--action-primary-hover)', active: 'var(--action-primary-active)', fg: 'var(--white)', border: 'transparent' },
  secondary: { rest: 'var(--action-secondary)', hover: 'var(--action-secondary-hover)', active: 'var(--indigo-900)', fg: 'var(--white)', border: 'transparent' },
  signal: { rest: 'var(--action-signal)', hover: 'var(--action-signal-hover)', active: 'var(--signal-700)', fg: 'var(--white)', border: 'transparent' },
  outline: { rest: 'transparent', hover: 'var(--surface-tint-brand)', active: 'var(--blue-100)', fg: 'var(--action-primary)', border: 'var(--action-primary)' },
  ghost: { rest: 'transparent', hover: 'var(--surface-sunken)', active: 'var(--slate-200)', fg: 'var(--text-strong)', border: 'transparent' },
  inverse: { rest: 'var(--white)', hover: 'var(--indigo-050)', active: 'var(--indigo-100)', fg: 'var(--indigo-900)', border: 'transparent' },
};

export function Button({
  children, variant = 'primary', size = 'md', iconLeft, iconRight,
  disabled = false, fullWidth = false, type = 'button', style, ...rest
}) {
  const [state, setState] = React.useState('rest');
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const bg = disabled ? 'var(--action-disabled-bg)' : v[state] || v.rest;
  const fg = disabled ? 'var(--action-disabled-fg)' : v.fg;

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => !disabled && setState('hover')}
      onMouseLeave={() => setState('rest')}
      onMouseDown={() => !disabled && setState('active')}
      onMouseUp={() => !disabled && setState('hover')}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : 'auto',
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        padding: s.padding, font: s.font, letterSpacing: 'var(--ls-normal)',
        color: fg, background: bg,
        border: '1px solid ' + (disabled ? 'transparent' : v.border),
        borderRadius: 'var(--radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-control)', textAlign: 'center', ...style,
      }}
      {...rest}
    >
      {iconLeft ? <Icon name={iconLeft} size={s.icon} /> : null}
      <span>{children}</span>
      {iconRight ? <Icon name={iconRight} size={s.icon} /> : null}
    </button>
  );
}
