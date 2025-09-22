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
 * @since MeowUI 0.1.0
 */

import { ViewStyle } from 'react-native';

import {
  Animation,
  AnimationConfig,
  PulseAnimation,
  ShakeAnimation,
  ZoomAnimation,
} from '../../ui/animation';

export type IconAnimation = Animation<AnimationConfig, ViewStyle>;

export interface IconAnimationRegistry {
  zoom: IconAnimation;
  pulse: IconAnimation;
  shake: IconAnimation;
}

export function getIconAnimation(
  animation?: keyof IconAnimationRegistry | null,
  config?: AnimationConfig
): IconAnimation | null {
  switch (animation) {
    case 'zoom':
      return new ZoomAnimation(config);
    case 'pulse':
      return new PulseAnimation(config);
    case 'shake':
      return new ShakeAnimation(config);
    default:
      return null;
  }
}
