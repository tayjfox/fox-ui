// types/expo-image.d.ts
// Fallback so TypeScript can compile even if 'expo-image' isn't installed.
// It re-exports something compatible with react-native Image props.

export declare module 'expo-image' {
  import * as React from 'react';
  import type { ImageProps as RNImageProps } from 'react-native';

  export type ImageProps = RNImageProps;
  const Image: React.ComponentType<ImageProps>;
  export default Image;
}
