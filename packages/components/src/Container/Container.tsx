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

import { ContainerStyle } from './styles';
import { ContainerProps } from './types';

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
