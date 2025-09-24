// scripts/generate-tailwind-theme.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load the JSON with an import attribute:
const lightJsonPath = path.resolve(__dirname, '../packages/themes/themes/light.json');
const light = await import(pathToFileURL(lightJsonPath).href, {
  with: { type: 'json' },
}).then((m) => m.default);

// ---------- helpers ----------
const isRef = (v) => typeof v === 'string' && v.startsWith('$');

function resolveValue(key, seen = new Set()) {
  const raw = light[key];
  if (!isRef(raw)) return raw;
  const ref = raw.slice(1);
  if (seen.has(ref)) throw new Error(`Circular ref: ${[...seen, ref].join(' -> ')}`);
  seen.add(ref);
  return resolveValue(ref, seen);
}

const resolved = {};
for (const k of Object.keys(light)) {
  resolved[k] = resolveValue(k);
}

const pick = (re) => Object.fromEntries(Object.entries(resolved).filter(([k]) => re.test(k)));

const toNumberKey = (o, re, idx = 1) =>
  Object.fromEntries(
    Object.entries(o)
      .map(([k, v]) => [Number(k.match(re)[idx]), v])
      .sort(([a], [b]) => a - b)
  );

function buildFamily(name) {
  const scaleRe = new RegExp(`^color-${name}-(\\d{3,4})$`);
  const scale = toNumberKey(pick(scaleRe), scaleRe);

  const tRe = new RegExp(`^color-${name}-transparent-(\\d{3})$`);
  const transparent = toNumberKey(pick(tRe), tRe);

  const stateKeys = ['default', 'hover', 'focus', 'active', 'disabled'];
  const states = {};
  for (const sk of stateKeys) {
    const k = `color-${name}-${sk}`;
    if (resolved[k]) states[sk] = resolved[k];
  }

  const textKeys = ['color', 'focus-color', 'hover-color', 'active-color', 'disabled-color'];
  const text = {};
  for (const tk of textKeys) {
    const k = `text-${name}-${tk}`;
    if (resolved[k]) {
      const key = tk.replace('-color', '').replace('color', 'default');
      text[key] = resolved[k];
    }
  }

  const DEFAULT = scale[500] ?? Object.values(scale)[0];

  return {
    ...(Object.keys(scale).length ? scale : {}),
    ...(Object.keys(transparent).length ? { transparent } : {}),
    ...(DEFAULT ? { DEFAULT } : {}),
    ...(Object.keys(states).length ? states : {}),
    ...(Object.keys(text).length ? { text } : {}),
  };
}

const families = ['primary', 'success', 'info', 'warning', 'danger', 'basic', 'control'].reduce(
  (acc, n) => ((acc[n] = buildFamily(n)), acc),
  {}
);

const extras = {};
if (resolved['text-basic-color']) extras.textBasic = resolved['text-basic-color'];
if (resolved['text-control-color']) extras.textControl = resolved['text-control-color'];
if (resolved['text-disabled-color']) extras.textDisabled = resolved['text-disabled-color'];
if (resolved['text-hint-color']) extras.textHint = resolved['text-hint-color'];
if (resolved['outline-color']) extras.outline = resolved['outline-color'];

const extend = { colors: { ...families, ...extras } };

// OPTIONAL: emit CSS custom properties
const cssLines = Object.entries(extend.colors).flatMap(([family, val]) => {
  if (typeof val !== 'object' || !val) return [];
  const kvs = [];
  for (const [k, v] of Object.entries(val)) {
    if (typeof v === 'string') {
      kvs.push(`  --${family}-${k}: ${v};`);
    } else if (typeof v === 'object' && v) {
      for (const [k2, v2] of Object.entries(v)) {
        kvs.push(`  --${family}-${k}-${k2}: ${v2};`);
      }
    }
  }
  return kvs;
});
const css = `:root{\n${cssLines.join('\n')}\n}\n`;
fs.writeFileSync(path.resolve(__dirname, '../src/theme/eva-vars.css'), css, 'utf8');

// Write Tailwind theme fragment
const outPath = path.resolve(__dirname, '../tailwind.theme.generated.js');
const header = `/** AUTO-GENERATED FROM themes/light.json - DO NOT EDIT BY HAND */\n`;
const body = `module.exports = ${JSON.stringify(extend, null, 2)};\n`;
fs.writeFileSync(outPath, header + body, 'utf8');

console.log('✓ Wrote', path.relative(process.cwd(), outPath));
console.log(
  '✓ Wrote',
  path.relative(process.cwd(), path.resolve(__dirname, '../src/theme/eva-vars.css'))
);
