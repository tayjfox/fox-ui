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

import { Text as TextBase } from 'react-native';

import { TextStyle } from './styles';
import { TextProps } from './types';

const TextRN = TextBase as React.ComponentType<TextProps>;
export class Text extends React.Component<TextProps> {


  private getClassName = (): string => {
    const { appearance, status, category, className, } = this.props;


    return TextStyle({
      class: className,
      appearance,
      status,
      category,
    });
  };
  public render(): React.ReactElement<TextProps> {
    const { style, appearance, category, status, className, ...textProps } = this.props;

    const TextClassName = this.getClassName();

    return (
      <TextRN
        className={TextClassName}
        {...textProps}
        style={[style]}
      />
    );
  }
}
