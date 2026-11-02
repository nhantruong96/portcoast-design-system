import React from 'react';

export function Definition({ term, children, source, note, inverse = false, style, ...rest }) {
  return (
    <div
      style={{
        borderTop: 'var(--bw-thick) solid ' + (inverse ? 'var(--cyan-500)' : 'var(--line-rule-heavy)'),
        paddingTop: 'var(--sp-3)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-15)', ...style,
      }}
      {...rest}
    >
      <dt style={{ font: 'var(--type-h4)', color: inverse ? 'var(--white)' : 'var(--text-strong)', margin: 0 }}>{term}</dt>
      <dd style={{ font: 'var(--type-body)', color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-body)', margin: 0 }}>{children}</dd>
      {source ? (
        <span style={{ font: 'var(--type-mono)', fontSize: 'var(--fs-xs)', color: inverse ? 'var(--cyan-400)' : 'var(--text-accent)' }}>{source}</span>
      ) : null}
      {note ? (
        <span style={{ font: 'var(--type-note)', color: inverse ? 'var(--navy-400)' : 'var(--text-muted)' }}>{note}</span>
      ) : null}
    </div>
  );
}
