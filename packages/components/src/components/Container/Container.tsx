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

// import React from 'react';

// import { View, ViewProps } from 'react-native';

// type IContainerProps = ViewProps;
// const Container = React.forwardRef<React.ComponentRef<typeof View>, IContainerProps>(
//   ({ className, ...props }, ref) => {
//     return <View className={centerStyle({ class: className })} {...props} ref={ref} />;
//   }
// );
// Container.displayName = 'Container';
// export { Container };
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';

import {
  View,
  ViewProps,
} from 'react-native';

import {
  LiteralUnion,
  Overwrite,
} from '../../devsupport';
import {
  styled,
  StyledComponentProps,
} from '../../theme';
import { centerStyle } from './styles';

type ContainerStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'default'>;
}>;

export interface ContainerProps extends ViewProps, ContainerStyledProps {
  children?: React.ReactNode;
  className?: string;
}

export type ContainerElement = React.ReactElement<ContainerProps>;

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
@styled('Container')
export class Container extends React.Component<ContainerProps> {

  public render(): React.ReactElement<ViewProps> {
    const { eva, style, className, ...viewProps } = this.props;

    return (
      <View
        {...viewProps}
        className={centerStyle({ class: className })}
        style={[eva.style, style]}
      />
    );
  }
}
