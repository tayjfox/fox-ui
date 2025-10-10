/**
 * @license
 * Copyright (c) 2025 Vedla Labs by Tay Fox. All Rights Reserved.
 * Originally developed as UI Kitten by Akveo.
 *
 * This project is licensed under the MIT License.
 * See the LICENSE file in the project root for full license information.
 *
 * @author Tay Fox <tay@vedla.ca>
 * @description: A React Native implementation of Eva Design System's Button component.
 * @since foxUI 1.0.0
 */

import React from 'react';

import {
  Animated,
  View,
} from 'react-native';

import { AnimationConfig } from '@fox-ui/utils';

import { IconAnimationRegistry } from './IconAnimation';

// This is basically needed to avoid generics in required props
// In general, could be SVGProps if using @fox-ui/eva-icons or ImageProps if using Image.

type WrappedElementProps = any;

export type IconProps<T = WrappedElementProps> = T & {
  name: string;
  pack?: string;
  style?: Animated.WithAnimatedValue<React.ComponentProps<any>['style']>;
  className?: string;
  animation?: keyof IconAnimationRegistry | null;
  animationConfig?: AnimationConfig;
};

export type IconElement<T = WrappedElementProps> = React.ReactElement<IconProps<T>>;

export interface Icons<T> {
  [key: string]: IconProvider<T>;
}

export interface IconPack<T> {
  name: string;
  icons: Icons<T>;
}

export interface IconProvider<T> {
  toReactElement(props?: T): React.ReactElement<T>;
}

export type IconsProp = IconPack<unknown> | IconPack<unknown>[];
export type IconRegistryElement = React.ReactElement<IconRegistryProps>;

export interface IconRegistryProps {
  icons: IconsProp;
  defaultIcons?: string;
}

export type AnimatedViewProps = React.ComponentProps<typeof View> & {
  className?: string;
};
