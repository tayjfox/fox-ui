import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts', './src/platform/index.ts', './src/animation/index.ts'],
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
  },

  watch: ['src', './src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
});
