import React from 'react';

export function SlideHeader({ title, subtitle, module, moduleTitle, eyebrow, right, ground = 'white', rule = true, style, ...rest }) {
  const dark = ground === 'indigo' || ground === 'blue';
  const kicker = eyebrow || (module ? 'Chương ' + module + (moduleTitle ? ' — ' + moduleTitle : '') : null);
  return (
    <header style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', marginBottom: 'var(--slide-header-gap)', flex: '0 0 auto', ...style }} {...rest}>
      {kicker || right ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--sp-4)' }}>
          {kicker ? (
            <span style={{ font: 'var(--type-eyebrow)', fontSize: 'var(--fs-sm)', letterSpacing: 'var(--ls-widest)', textTransform: 'uppercase', color: dark ? 'var(--sky-400)' : 'var(--text-accent)' }}>{kicker}</span>
          ) : <span />}
          {right}
        </div>
      ) : null}
      <h2 style={{
        font: 'var(--fw-bold) var(--fs-3xl)/var(--lh-snug) var(--font-display)',
        letterSpacing: 'var(--ls-tight)', color: dark ? 'var(--white)' : 'var(--text-strong)',
        margin: 0, maxWidth: '24ch', textWrap: 'balance',
      }}>{title}</h2>
      {subtitle ? (
        <p style={{ font: 'var(--type-body-lg)', color: dark ? 'var(--text-inverse-muted)' : 'var(--text-muted)', margin: 0, maxWidth: 'var(--measure-body)' }}>{subtitle}</p>
      ) : null}
      {rule ? <div style={{ height: 'var(--bw-rule)', background: dark ? 'var(--sky-500)' : 'var(--slide-rule)', width: 88, marginTop: 'var(--sp-1)' }} /> : null}
    </header>
  );
}
