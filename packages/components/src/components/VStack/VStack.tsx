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

import { VStackStyle } from './styles';
import { VStackProps } from './types';

export { type VStackElement, type VStackProps } from './types';

/**
 * VStack container.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the VStack container.
 *
 * @property {string} className - Additional class name for the container.
 * Can be used to apply nativewind custom styles.
 * Defaults to *undefined*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example ContainerLevel
 * Container should be used as a root component of the screen.
 * Comparative to `View` element, it uses a background color with respect to current theme.
 * Using Container is redundant, when background color is configured with `style` property.
 *
 * Containers can be used in different levels.
 * It is useful, when needed to highlight the container relative to another.
 */


const ViewRN = View as React.ComponentType<VStackProps>;

export class VStack extends React.Component<VStackProps> {
  render(): React.ReactNode {
    const { className, gap, reversed, alignment, distribution, ...props } = this.props;

    return (
      <ViewRN className={VStackStyle({
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
