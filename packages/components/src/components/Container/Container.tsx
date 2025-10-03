/**
 * @license
 * Copyright (c) 2025 Vedla Labs by Tay Fox. All Rights Reserved.
 *
 * This project is licensed under the MIT License.
 * See the LICENSE file in the project root for full license information.
 *
 * @author Tay Fox <tay@vedla.ca>
 * @description: A React Native implementation of a container component.
 * @since MeowUI 0.1.0
 */

import React from 'react';

import { View } from 'react-native';

import { ContainerStyle } from './styles';
import { ContainerProps } from './types';

/**
 * Overall page container.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the layout.
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


const ViewRN = View as React.ComponentType<ContainerProps>;

export class Container extends React.Component<ContainerProps> {
  render(): React.ReactNode {
    const { className, ref, ...props } = this.props;

    return (
      <ViewRN className={ContainerStyle({ class: className })} {...props} ref={ref}>
        {this.props.children}
      </ViewRN>
    );
  }
}
