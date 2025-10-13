import type { ImageProps as ExpoImageProps } from 'expo-image';
import type { ImageProps as RNImageProps } from 'react-native';

import type {
  ComponentProps,
  SizesAlt,
} from '@/shared/types';

type AnyImageProps = ExpoImageProps | RNImageProps;

export interface ImageProps extends AnyImageProps, ComponentProps {
  size?: SizesAlt;
}

export type ImageElement = React.ReactElement<ImageProps>;
