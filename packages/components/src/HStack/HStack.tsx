/**
 * @license
 * Copyright (c) 2025 Vedla Labs by Tay Fox. All Rights Reserved.
 *
 * This project is licensed under the MIT License.
 * See the LICENSE file in the project root for full license information.
 *
 * @author Tay Fox <tay@vedla.ca>
 * @description: A React Native implementation of a container component.
 * @since foxUI 1.0.0
 */

import React from 'react';

import { View } from 'react-native';

import { HStackStyle } from './styles';
import { HStackProps } from './types';

export { type HStackElement, type HStackProps } from './types';

const ViewRN = View as React.ComponentType<HStackProps>;

export class HStack extends React.Component<HStackProps> {
  render(): React.ReactNode {
    const { className, gap, reversed, alignment, distribution, ...props } = this.props;

    return (
      <ViewRN className={HStackStyle({
        class: className,
        gap,
        reversed,
        alignment,
        distribution
      })} {...props}>
        {this.props.children}
      </ViewRN>
    );
  }
}
