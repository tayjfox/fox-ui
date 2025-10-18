import type { ImageProps as ExpoImageProps } from 'expo-image';

import {
  RenderableTextProps,
  RenderProp,
} from '@/Renderable';
import type {
  ComponentProps,
  SizesAlt,
} from '@/shared/types';

export type CaptionElement = RenderProp<RenderableTextProps> | React.ReactNode;

export interface ImageProps extends ExpoImageProps, ComponentProps {
  size?: SizesAlt | 'full';
  caption?: CaptionElement;
}

export type ImageElement = React.ReactElement<ImageProps>;
