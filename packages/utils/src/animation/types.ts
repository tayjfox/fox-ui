import { Animated } from 'react-native';

/**
 * @property {number} cycles - number of animation cycles. -1 for infinite
 */
export interface AnimationConfig extends Animated.AnimationConfig {
  cycles?: number;
}
