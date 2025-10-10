/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';

import { View as ViewRN } from 'react-native';

import { DividerStyle } from './styles';
import { DividerProps } from './types';

/**
 * A divider is a thin line that groups content in lists and layouts.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example DividerSimpleUsage
 */

const View = ViewRN as React.ComponentType<DividerProps>;

export class Divider extends React.Component<DividerProps> {

  private getClassName = (): string => {
    const { height, className, } = this.props;

    const isPredefinedSize = typeof height === 'string';
    return DividerStyle({
      height: isPredefinedSize ? height : undefined,

      class: className,
    });
  };

  public render(): React.ReactElement {

    const { style, height, ...viewProps } = this.props;

    const className = this.getClassName();

    return (
      <View
        style={[{ height: typeof height === 'number' ? height : 1 }, style]}
        {...viewProps}
        className={className}
      />
    );
  }
}
