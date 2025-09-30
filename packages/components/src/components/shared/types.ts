/**
 * @license
 * Copyright (c) 2025 Vedla Labs by Tay Fox. All Rights Reserved.
 *
 * This project is licensed under the MIT License.
 * See the LICENSE file in the project root for full license information.
 *
 * @author Tay Fox <tay@vedla.ca>
 * @description: A React Native implementation of Eva Design System's Button component.
 * @since MeowUI 0.1.0
 */

export type LiteralUnion<T extends U, U = string> = T | (U & {});
export type TokenOf<T extends readonly string[]> = T[number];

export const GAP = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const;
export type GapToken = TokenOf<typeof GAP>;

export const ALIGNMENT = ['start', 'center', 'end', 'stretch', 'baseline'] as const;
export type Alignment = TokenOf<typeof ALIGNMENT>;

export const DISTRIBUTION = ['start', 'center', 'end', 'between', 'around', 'evenly'] as const;
export type Distribution = TokenOf<typeof DISTRIBUTION>;

// Status
export const STATUSES = [
  'basic',
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'control',
] as const;
export type StatusToken = TokenOf<typeof STATUSES>;
export type ButtonStatus = TokenOf<typeof STATUSES>;
export type ComponentStatus = TokenOf<typeof STATUSES>;

// Size
export const SIZES = ['tiny', 'small', 'medium', 'large', 'giant'] as const;
export type Sizes = TokenOf<typeof SIZES>;

// Input size
export const INPUT_SIZES = ['small', 'medium', 'large'] as const;
export type InputSizeToken = TokenOf<typeof INPUT_SIZES>;
export type InputSizeStrict = InputSizeToken;

export interface PressState {
  interactionState: 'hover' | 'disabled' | 'active' | 'focused' | undefined;
}

export interface ActiveState {
  interactionState: 'active' | undefined;
}
