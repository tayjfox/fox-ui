/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';

import { ImageProps } from 'react-native';

import {
  Renderable,
  RenderProp,
} from '@/Renderable';
import {
  TouchableWeb,
  TouchableWebElement,
  TouchableWebProps,
} from '@/Touchable';

export interface TopNavigationActionProps extends TouchableWebProps {
  icon?: RenderProp<Partial<ImageProps>>;
}

export type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>;



export class TopNavigationAction extends React.Component<TopNavigationActionProps> {

  // public onBlur = (event: NativeSyntheticEvent<TargetedEvent>): void => {
  //   this.props.eva?.dispatch?.([]);
  //   this.props.onBlur?.(event);
  // };

  // private onMouseEnter = (event: NativeSyntheticEvent<TargetedEvent>): void => {
  //   this.props.eva?.dispatch?.([Interaction.HOVER]);
  //   this.props.onMouseEnter?.(event);
  // };

  // private onMouseLeave = (event: NativeSyntheticEvent<TargetedEvent>): void => {
  //   this.props.eva?.dispatch?.([]);
  //   this.props.onMouseLeave?.(event);
  // };

  // private onFocus = (event: NativeSyntheticEvent<TargetedEvent>): void => {
  //   this.props.eva?.dispatch?.([Interaction.FOCUSED]);
  //   this.props.onFocus?.(event);
  // };

  // private onPressIn = (event: GestureResponderEvent): void => {
  //   this.props.eva?.dispatch?.([Interaction.ACTIVE]);
  //   this.props.onPressIn?.(event);
  // };

  // private onPressOut = (event: GestureResponderEvent): void => {
  //   this.props.eva?.dispatch?.([]);
  //   this.props.onPressOut?.(event);
  // };


  public render(): TouchableWebElement {
    const { icon, ...touchableProps } = this.props;


    return (
      <TouchableWeb
        {...touchableProps}
      // style={[evaStyle.container, style]}
      // onMouseEnter={this.onMouseEnter}
      // onMouseLeave={this.onMouseLeave}
      // onFocus={this.onFocus}
      // onBlur={this.onBlur}
      // onPressIn={this.onPressIn}
      // onPressOut={this.onPressOut}
      >
        <Renderable

          component={icon}
        />
      </TouchableWeb>
    );
  }
}
