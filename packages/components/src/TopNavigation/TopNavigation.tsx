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

import {
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';

import {
  Renderable,
  RenderableText,
  RenderProp,
} from '@/Renderable';
import { TextProps } from '@/Text';

export interface TopNavigationProps extends ViewProps {
  title?: RenderProp<TextProps> | React.ReactNode;
  subtitle?: RenderProp<TextProps> | React.ReactNode;
  accessoryLeft?: () => React.ReactElement;
  accessoryRight?: () => React.ReactElement;
  alignment?: AlignmentProp;
}

export type TopNavigationElement = React.ReactElement<TopNavigationProps>;

type AlignmentProp = 'start' | 'center';



export class TopNavigation extends React.Component<TopNavigationProps> {


  public render(): React.ReactElement<ViewProps> {
    const { style, title, subtitle, alignment = 'start', accessoryLeft, accessoryRight, ...viewProps } = this.props;

    return (
      <View
        style={[styles.container, style]}
        {...viewProps}
      >
        <View style={styles.leftControlContainer}>
          <Renderable component={accessoryLeft} />
        </View>
        <View style={styles.titleContainer}>
          <RenderableText

            component={title}
          />
          <RenderableText

            component={subtitle}
          />
        </View>
        <View style={[styles.rightControlsContainer]}>
          <Renderable component={accessoryRight} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerCentered: {
    justifyContent: 'space-between',
  },
  titleContainerCentered: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  leftControlContainer: {
    flexDirection: 'row',
    zIndex: 1,
  },
  rightControlsContainer: {
    flexDirection: 'row',
    zIndex: 1,
  },
  rightControlsContainerStart: {
    flex: 0,
    justifyContent: 'flex-end',
  },
});
