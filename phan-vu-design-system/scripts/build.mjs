const shim = {
  name: 'react-globals',
  setup(b) {
    b.onResolve({ filter: /^react(\/jsx-runtime|\/jsx-dev-runtime)?$|^react-dom$/ }, a => ({ path: a.path, namespace: 'g' }));
    b.onLoad({ filter: /.*/, namespace: 'g' }, a => ({
      contents: a.path === 'react-dom' ? 'module.exports = window.ReactDOM;'
        : a.path.startsWith('react/jsx') ? 'const R = window.React; export const Fragment = R.Fragment; export function jsx(t,p,k){ const {children,...r}=p||{}; if(k!==undefined) r.key=k; return Array.isArray(children)? R.createElement(t,r,...children) : children!==undefined ? R.createElement(t,r,children) : R.createElement(t,r);} export const jsxs = jsx; export const jsxDEV = jsx;'
        : 'module.exports = window.React;',
      loader: 'js',
    }));
  },
};
const r = await Bun.build({ entrypoints: ['./components/entry.js'], format: 'iife', minify: true, target: 'browser', plugins: [shim], define: { 'process.env.NODE_ENV': '"production"' } });
if (!r.success) { console.error(r.logs); process.exit(1); }
let code = await r.outputs[0].text();
// expose exports on window.PhanVu
const names = ['Button','IconButton','Badge','Tag','Card','Callout','ClauseRef','NumberTile','Checklist','Definition','StatBlock','PullQuote','DataTable','Icon','Logo','ImagePlaceholder','SectionBand','ProjectSheet','BrochureFooter','SlideFrame','SlideHeader','SlideFooter','NotesPanel'];
const header = '/* @ds-bundle: ' + JSON.stringify({ format: 4, namespace: 'PhanVu', components: names.map(n => ({ name: n })) }) + ' */\n';
await Bun.write('./dist/phanvu.bundle.js', header + code);
console.log('ok', code.length);
