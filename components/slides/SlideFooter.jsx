import React from 'react';
import { Logo } from '../media/Logo.jsx';

export function SlideFooter({ page, courseCode, note, ground = 'white', logoSrc = '/assets/logo.svg', style, ...rest }) {
  const dark = ground === 'navy' || ground === 'blue';
  const meta = dark ? 'var(--navy-400)' : 'var(--slide-meta)';
  return (
    <footer
      style={{
        marginTop: 'auto', paddingTop: 'var(--sp-3)',
        borderTop: '2px solid ' + (dark ? 'var(--line-inverse)' : 'var(--line-rule-heavy)'),
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--sp-4)',
        flex: '0 0 auto', ...style,
      }}
      {...rest}
    >
      <Logo size={96} tone={dark ? 'inverse' : 'brand'} src={logoSrc} />
      <span style={{ font: 'var(--type-mono)', fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--ls-wide)', color: meta, textAlign: 'center', flex: 1 }}>
        {note || courseCode}
      </span>
      <span style={{ font: 'var(--fw-semibold) var(--fs-sm)/1 var(--font-mono)', color: dark ? 'var(--white)' : 'var(--text-strong)', fontVariantNumeric: 'tabular-nums' }}>{page}</span>
    </footer>
  );
}
