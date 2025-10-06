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
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  TargetedEvent,
} from 'react-native';

import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from './TouchableWithoutFeedback';

export interface TouchableBaseWebProps extends TouchableWithoutFeedbackProps {
  onMouseEnter?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onMouseLeave?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
}
/**
 * Additional props introduced in MeowUI. v0.1.0
 * @since foxUI 1.0.0
 */
export interface TouchableWebProps extends TouchableBaseWebProps {
  className?: string;

}

export type TouchableWebElement = React.ReactElement<TouchableWebProps>;

/**
 * Helper component for the Touchable component rendered on the web.
 */
export class TouchableWeb extends React.Component<TouchableWebProps> {

  public render(): React.ReactElement {
    const { style, ...touchableProps } = this.props;

    return (
      <TouchableWithoutFeedback
        {...touchableProps}
        style={[style]}
      // style={[styles.container, style]}
      />
    );
  }
}

const styles = Platform.OS === 'web' && StyleSheet.create({
  container: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    outlineWidth: 0,
  },
});

