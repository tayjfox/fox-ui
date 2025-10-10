/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Animated, Easing, Platform, ViewProps } from 'react-native';

import { Animation } from './animation';
import { AnimationConfig } from './types';

const DEFAULT_CONFIG: ShakeAnimationConfig = {
  start: 0.0,
  offset: 2.5,
  easing: Easing.linear,
  duration: 25,
  cycles: 8,
  useNativeDriver: Platform.OS !== 'web',
};

type TimingAnimationConfig = Omit<Animated.TimingAnimationConfig, 'toValue'>;

export interface ShakeAnimationConfig extends AnimationConfig, TimingAnimationConfig {
  start?: number;
  offset?: number;
}

export class ShakeAnimation extends Animation<ShakeAnimationConfig, ViewProps> {
  private readonly value: Animated.Value;

  constructor(config?: ShakeAnimationConfig) {
    super({ ...DEFAULT_CONFIG, ...config });
    this.value = new Animated.Value(this.config.start ?? 0);
  }

  protected get animation(): Animated.CompositeAnimation {
    const { start, offset = DEFAULT_CONFIG.offset, ...restConfig } = this.config;
    const safeOffset = offset ?? DEFAULT_CONFIG.offset!;

    const startAnimation: Animated.CompositeAnimation = Animated.timing(this.value, {
      toValue: this.counter % 2 !== 0 ? -safeOffset : safeOffset,
      ...restConfig,
    });

    const endAnimation: Animated.CompositeAnimation = Animated.timing(this.value, {
      toValue: this.counter % 2 !== 0 ? safeOffset : -safeOffset,
      ...restConfig,
    });

    return Animated.sequence([startAnimation, endAnimation]);
  }

  public toProps(): ViewProps {
    return {
      style: {
        transform: [{ translateX: this.value }],
      },
    };
  }
}
