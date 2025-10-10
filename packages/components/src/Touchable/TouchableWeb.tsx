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
  Platform,
  StyleSheet,
} from 'react-native';

import { TouchableWithoutFeedback } from './TouchableWithoutFeedback';
import { TouchableWebProps } from './types';

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

