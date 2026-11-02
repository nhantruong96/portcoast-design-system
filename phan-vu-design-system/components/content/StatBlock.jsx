import React from 'react';

export function StatBlock({ value, unit, label, note, tone = 'brand', align = 'left', style, ...rest }) {
  const tones = { brand: 'var(--text-brand)', accent: 'var(--text-accent)', signal: 'var(--text-signal)', indigo: 'var(--text-strong)', inverse: 'var(--white)' };
  const inverse = tone === 'inverse';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-1)', textAlign: align, ...style }} {...rest}>
      <span style={{ font: 'var(--fw-black) var(--fs-4xl)/0.98 var(--font-display)', letterSpacing: 'var(--ls-tighter)', color: tones[tone] || tones.brand, fontVariantNumeric: 'tabular-nums' }}>
        {value}
        {unit ? <span style={{ font: 'var(--fw-semibold) var(--fs-lg)/1 var(--font-display)', marginLeft: 3 }}>{unit}</span> : null}
      </span>
      <span style={{ font: 'var(--type-label)', letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: inverse ? 'var(--sky-400)' : 'var(--text-muted)' }}>{label}</span>
      {note ? <span style={{ font: 'var(--type-body-sm)', color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)' }}>{note}</span> : null}
    </div>
  );
}
