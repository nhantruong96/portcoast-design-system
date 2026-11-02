import React from 'react';

export function ProjectSheet({ name, rows = [], image, imageAlt = '', imageSide = 'right', style, ...rest }) {
  const table = (
    <div style={{ flex: '1 1 320px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
      <h4 style={{ font: 'var(--type-project)', letterSpacing: 'var(--ls-normal)', textTransform: 'uppercase', color: 'var(--text-strong)', margin: 0 }}>{name}</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: i === 0 ? 'var(--border-default)' : 'none', borderBottom: 'var(--border-default)' }}>
              <th scope="row" style={{ textAlign: 'left', fontWeight: 'var(--fw-regular)', color: 'var(--text-muted)', padding: 'var(--sp-15) var(--sp-3) var(--sp-15) 0', width: '44%', verticalAlign: 'top' }}>
                {r.label}{r.labelEn ? ' / ' + r.labelEn : ''}
              </th>
              <td style={{ padding: 'var(--sp-15) 0', verticalAlign: 'top', color: 'var(--text-strong)', fontVariantNumeric: 'tabular-nums' }}>{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  const media = image ? (
    <div style={{ flex: '0 1 280px', minWidth: 200 }}>
      {typeof image === 'string'
        ? <img src={image} alt={imageAlt} style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block', borderRadius: imageSide === 'right' ? '0 var(--radius-photo) 0 var(--radius-photo)' : 'var(--radius-photo) 0 var(--radius-photo) 0' }} />
        : image}
    </div>
  ) : null;
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-6)', alignItems: 'center', ...style }} {...rest}>
      {imageSide === 'left' ? media : null}
      {table}
      {imageSide === 'right' ? media : null}
    </section>
  );
}
