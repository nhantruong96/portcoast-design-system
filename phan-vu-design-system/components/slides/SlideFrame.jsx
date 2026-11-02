import React from 'react';

const GROUNDS = {
  white: { background: 'var(--slide-bg)', color: 'var(--text-body)' },
  paper: { background: 'var(--slide-bg-alt)', color: 'var(--text-body)' },
  indigo: { background: 'var(--slide-bg-section)', color: 'var(--text-inverse-muted)' },
  blue: { background: 'var(--action-primary)', color: 'var(--blue-100)' },
};

export function SlideFrame({ children, ground = 'white', pad = true, fit = false, style, ...rest }) {
  const g = GROUNDS[ground] || GROUNDS.white;
  const frame = (
    <div
      style={{
        width: 'var(--slide-w)', height: 'var(--slide-h)', flex: '0 0 auto',
        background: g.background, color: g.color,
        padding: pad ? 'var(--slide-pad-top) var(--slide-pad-x) var(--slide-pad-bottom)' : 0,
        display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
        fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
  if (!fit) return frame;
  return (
    <div style={{ width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', containerType: 'inline-size' }}>
      <div style={{ transform: 'scale(calc(100cqw / 1280px))', transformOrigin: 'top left' }}>{frame}</div>
    </div>
  );
}
