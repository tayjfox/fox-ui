/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Animated, Platform } from 'react-native';

import { AnimationConfig } from './types';

export const DEFAULT_CONFIG: AnimationConfig = {
  cycles: 1,
  useNativeDriver: Platform.OS !== 'web',
};

export abstract class Animation<C extends AnimationConfig, R> {
  protected abstract animation: Animated.CompositeAnimation;
  protected counter = 0;
  protected endCallback: Animated.EndCallback | undefined = undefined;
  protected running = false;
  protected config: C;

  protected constructor(config?: C) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    } as C;
  }

  public abstract toProps(): R;

  public start(callback?: Animated.EndCallback): void {
    this.endCallback = callback || undefined;
    this.running = true;

    this.animation.start(this.onAnimationEnd);
  }

  public stop(): void {
    this.running = false;

    this.animation.stop();
  }

  public release(): void {
    this.stop();
  }

  protected onAnimationEnd = (result: Animated.EndResult): void => {
    this.counter += 1;
    if (this.counter === this.config.cycles) {
      this.stop();
    }
    if (this.running) {
      this.start(this.endCallback);
    }
    if (!this.running) {
      this.counter = 0;
      this.endCallback?.(result);
      this.endCallback = undefined;
    }
  };
}
