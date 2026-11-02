import React from 'react';

const SIZES = { sm: 96, md: 160, lg: 240, xl: 320 };

export function Logo({ size = 'md', tone = 'brand', src = '/assets/logo.svg', style, ...rest }) {
  const width = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
  const filter = tone === 'inverse' ? 'brightness(0) invert(1)'
    : tone === 'ink' ? 'brightness(0) saturate(0)'
    : 'none';
  return (
    <img
      src={src}
      alt="Portcoast"
      style={{ width, height: 'auto', display: 'block', filter, ...style }}
      {...rest}
    />
  );
}
