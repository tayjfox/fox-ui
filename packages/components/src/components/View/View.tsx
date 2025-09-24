/**
 * @license
 * Copyright (c) 2025 Vedla Labs by Tay Fox. All Rights Reserved.
 *
 * This project is licensed under the MIT License.
 * See the LICENSE file in the project root for full license information.
 *
 * @author Tay Fox <tay@vedla.ca>
 * @description: A React Native implementation of a View component.
 * @since MeowUI 0.1.0
 */

import React from 'react';

import { View as ViewRN } from 'react-native';

import { ViewProps } from './types';

export { type ViewElement, type ViewProps } from './types';

/**
 * Overall page View.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the layout.
 *
 * @property {string} className - Additional class name for the View.
 * Can be used to apply nativewind custom styles.
 * Defaults to *undefined*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 */


const ViewComponent = ViewRN as React.ComponentType<ViewProps>;

export class View extends React.Component<ViewProps> {
  render(): React.ReactNode {
    const { className, ...props } = this.props;

    return (
      <ViewComponent className={className} {...props} >
        {this.props.children}
      </ViewComponent>
    );
  }
}
