/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';

import { View } from '../View/View';
import { LayoutStyle } from './styles';
import { LayoutProps } from './types';

/**
 * Overall page container.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the layout.
 *
 * @property {string} level - Background color level of component.
 * Can be `1`, `2`, `3` or `4`.
 * Defaults to *1*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example LayoutLevel
 * Layout should be used as a root component of the screen.
 * Comparative to `View` element, it uses a background color with respect to current theme.
 * Using Layout is redundant, when background color is configured with `style` property.
 *
 * Layouts can be used in different levels.
 * It is useful, when needed to highlight the container relative to another.
 */




const ViewRN = View as React.ComponentType<LayoutProps>;

export class Layout extends React.Component<LayoutProps> {
  private getClassName = (): string => {
    const { className, level } = this.props;

    return LayoutStyle({
      level: level ?? '1',
      class: className,
    });
  };

  render(): React.ReactNode {
    const { ...props } = this.props;

    const className = this.getClassName();

    return (
      <ViewRN  {...props} className={LayoutStyle({ className })} />

    );
  }
}
