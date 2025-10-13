import { defineConfig } from 'tsup';

const ComponentList = [
  'Button',
  'Center',
  'Container',
  'Divider',
  'HStack',
  'Icon',
  'Image',
  'Layout',
  'List',
  'Renderable',
  'Text',
  'TopNavigation',
  'Touchable',
  'View',
  'VStack',
];

const EntryPoints = ComponentList.map((component) => `./src/${component}/index.ts`);

export default defineConfig({
  entry: ['./src/index.ts', ...EntryPoints],
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ['cjs', 'esm'],
  outDir: 'dist',
  splitting: false,

  noExternal: [],
  external: ['*'],

  dts: true,
  loader: {
    '.js': 'jsx',
    '.ts': 'tsx',
    '.tsx': 'tsx',
    '.svg': 'file',
  },

  watch: ['src', './src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
});
