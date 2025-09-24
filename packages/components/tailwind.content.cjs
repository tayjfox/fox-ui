// @fox-ui/components/tailwind.content.cjs
const path = require('node:path');
const { createRequire } = require('node:module');
const requireHere = createRequire(__filename);

const root = path.dirname(requireHere.resolve('@fox-ui/components/package.json'));

module.exports = [
  path.join(root, 'src/**/*.{js,jsx,ts,tsx,mjs}'),
  path.join(root, 'dist/**/*.{js,jsx,ts,tsx,mjs}'),
];
