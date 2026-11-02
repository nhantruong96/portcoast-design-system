import React from 'react';
import { Icon } from '../media/Icon.jsx';

const MARKS = {
  check: { icon: 'check', color: 'var(--text-success)' },
  objective: { icon: 'target', color: 'var(--text-brand)' },
  deliverable: { icon: 'file-check', color: 'var(--text-accent)' },
  bullet: { icon: 'minus', color: 'var(--text-subtle)' },
};

export function Checklist({ items = [], mark = 'check', inverse = false, columns = 1, style, ...rest }) {
  const m = MARKS[mark] || MARKS.check;
  return (
    <ul
      style={{
        listStyle: 'none', margin: 0, padding: 0,
        display: 'grid', gridTemplateColumns: 'repeat(' + columns + ', minmax(0, 1fr))',
        gap: 'var(--sp-4) var(--sp-6)', alignContent: 'start', ...style,
      }}
      {...rest}
    >
      {items.map((item, i) => {
        const text = typeof item === 'string' ? item : item.text;
        const note = typeof item === 'string' ? null : item.note;
        return (
          <li key={i} style={{ display: 'flex', gap: 'var(--sp-3)', margin: 0, alignItems: 'flex-start' }}>
            <span style={{ color: inverse ? 'var(--cyan-400)' : m.color, marginTop: 2 }}><Icon name={m.icon} size={17} strokeWidth={2.25} /></span>
            <div style={{ minWidth: 0 }}>
              <span style={{ font: 'var(--type-body)', color: inverse ? 'var(--white)' : 'var(--text-body)' }}>{text}</span>
              {note ? <div style={{ font: 'var(--type-body-sm)', color: inverse ? 'var(--navy-400)' : 'var(--text-muted)', marginTop: 2 }}>{note}</div> : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
