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
  Insets,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { TouchableWithoutFeedbackProps } from './types';

/**
 * Helper component for the Touchable component with no opacity feedback.
 *
 * Applies recommended hitSlop by default.
 * @see https://reactnative.dev/docs/view#hitslop
 *
 * Allows passing ReactNode as children whereas original TouchableWithoutFeedback not.
 */
export class TouchableWithoutFeedback extends React.Component<TouchableWithoutFeedbackProps> {

  private createHitSlopInsets = (): Insets => {
    const flatStyle: ViewStyle = StyleSheet.flatten(this.props.style || {});

    // @ts-ignore: `width` is restricted to be a number
    const value: number = 40 - flatStyle.height || 0;

    return {
      left: value,
      top: value,
      right: value,
      bottom: value,
    };
  };

  public render(): React.ReactElement {
    return (
      <TouchableOpacity
        activeOpacity={1.0}
        hitSlop={this.props.useDefaultHitSlop ? this.createHitSlopInsets() : undefined}
        {...this.props}
      />
    );
  }
}
