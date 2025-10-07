/**
 * @license
 * Copyright (c) 2025 Vedla Labs by Tay Fox. All Rights Reserved.
 *
 * This project is licensed under the MIT License.
 * See the LICENSE file in the project root for full license information.
 *
 * @author Tay Fox <tay@vedla.ca>
 * @description: A React Native implementation of a Center component.
 * @since foxUI 1.0.0
 */

import React from 'react';

import { View } from 'react-native';

import { CenterStyle } from './styles';
import { CenterProps } from './types';

export { type CenterElement, type CenterProps } from './types';

/**
 * Overall page Center container.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the Center container.
 *
 * @property {string} className - Additional class name for the Center container.
 * Can be used to apply nativewind custom styles.
 * Defaults to *undefined*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example CenterLevel
 * Center should be used as a root component of the screen.
 * Comparative to `View` element, it uses a background color with respect to current theme.
 * Using Center is redundant, when background color is configured with `style` property.
 *
 * Centers can be used in different levels.
 * It is useful, when needed to highlight the Center relative to another.
 */


const ViewRN = View as React.ComponentType<CenterProps>;

export class Center extends React.Component<CenterProps> {
  render(): React.ReactNode {
    const { className, ref, ...props } = this.props;

    return (
      <ViewRN className={CenterStyle({ class: className })} {...props} ref={ref}>
        {this.props.children}
      </ViewRN>
    );
  }
}
