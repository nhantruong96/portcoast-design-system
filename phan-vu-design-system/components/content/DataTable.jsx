import React from 'react';

export function DataTable({ columns = [], rows = [], zebra = false, dense = false, caption, style, ...rest }) {
  const pad = dense ? '7px 10px' : '10px 14px';
  return (
    <div style={{ width: '100%', ...style }} {...rest}>
      {caption ? (
        <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-widest)', textTransform: 'uppercase', color: 'var(--text-accent)', marginBottom: 'var(--sp-2)' }}>{caption}</div>
      ) : null}
      <table style={{ width: '100%', borderCollapse: 'collapse', font: 'var(--type-body-sm)' }}>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i} style={{
                textAlign: c.align || 'left', padding: pad, borderBottom: 'var(--bw-thick) solid var(--line-rule-heavy)',
                font: 'var(--type-label)', letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase',
                color: 'var(--text-strong)', whiteSpace: 'nowrap', width: c.width,
              }}>{c.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} style={{ background: zebra && r % 2 === 1 ? 'var(--surface-paper)' : 'transparent' }}>
              {columns.map((c, i) => (
                <td key={i} style={{
                  textAlign: c.align || 'left', padding: pad, borderBottom: 'var(--border-hairline)',
                  color: i === 0 ? 'var(--text-strong)' : 'var(--text-body)',
                  fontWeight: i === 0 ? 'var(--fw-medium)' : 'var(--fw-regular)',
                  fontFamily: c.mono ? 'var(--font-mono)' : 'inherit',
                  fontVariantNumeric: 'tabular-nums', verticalAlign: 'top',
                }}>{row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
