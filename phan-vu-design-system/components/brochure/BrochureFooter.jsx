import React from 'react';

export function BrochureFooter({ company = 'Phan Vu Investment Corporation', url = 'www.phanvu.vn', align = 'left', style, ...rest }) {
  return (
    <footer style={{
      background: 'var(--steel-500)', color: 'var(--on-steel)',
      padding: 'var(--sp-2) var(--sp-8)', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: 'var(--sp-4)', ...style,
    }} {...rest}>
      <span style={{ font: 'var(--type-footer)', letterSpacing: 'var(--ls-widest)', order: align === 'right' ? 2 : 1 }}>{company}</span>
      {url ? <span style={{ font: 'var(--type-footer)', letterSpacing: 'var(--ls-widest)', order: align === 'right' ? 1 : 2 }}>{url}</span> : null}
    </footer>
  );
}
