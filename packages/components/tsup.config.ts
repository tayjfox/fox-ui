import {
  defineConfig,
  Options,
} from 'tsup';

export default defineConfig((options: Options) => ({
  entry: {
    index: './src/components/index.ts',
  },
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ['cjs', 'esm'],
  external: [
    'react',
    'expo-router',
    '@ui-kitten',
    '@eva-design/eva',
    'react-native-markdown-display',

    // Node built-ins (forcefully mark them external)
    'process',
    'util',
    'readline',
    'tty',
    'fs',
    'path',
  ],
  dts: true,
  ...options,
}));
