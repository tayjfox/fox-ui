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
  Renderable,
  RenderableText,
} from '@/Renderable';
import { PressState } from '@/shared/types';
import {
  TouchableWeb,
  TouchableWebElement,
} from '@/Touchable';

import {
  AccesoriesVariants,
  ButtonStyle,
  TextVariants,
} from './styles';
import { type ButtonProps } from './types';

export class Button extends React.Component<ButtonProps, PressState> {


  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      interactionState: undefined,
    };
  }

  private onMouseEnter = (): void => {
    this.setState({ interactionState: 'hover' });
  };

  private onMouseLeave = (): void => {
    this.setState({ interactionState: undefined });
  };

  private onFocus = (): void => {
    this.setState({ interactionState: 'focused' });
  };

  private onBlur = (): void => {
    this.setState({ interactionState: undefined });
  };

  private onPressIn = (): void => {
    this.setState({ interactionState: 'active' });
  };

  private onPressOut = (): void => {
    this.setState({ interactionState: undefined });
  };

  private getClassName = (): string => {
    const { appearance, status, size, className, disabled } = this.props;
    const { interactionState } = this.state;
    const state = disabled ? 'disabled' : interactionState;

    return ButtonStyle({
      appearance,
      status,
      size,
      state,
      class: className,
    });
  };

  private getAccesoryStyle = (): string => {
    const { appearance, status, size, accesoryClassName, disabled } = this.props;
    const { interactionState } = this.state;
    const state = disabled ? 'disabled' : interactionState;

    return AccesoriesVariants({
      class: accesoryClassName,
      appearance,
      status,
      size,
      state,
    });
  };

  private getTextStyle = (): string => {
    const { appearance, status, size, textClassName, disabled } = this.props;
    const { interactionState } = this.state;
    const state = disabled ? 'disabled' : interactionState;

    return TextVariants({
      appearance,
      status,
      size,
      state,
      class: textClassName,
    });
  };

  public render(): TouchableWebElement {
    const { style, accessoryLeft, accessoryRight, children, disabled, ...touchableProps } = this.props;

    const className = this.getClassName();
    const accesoryStyle = this.getAccesoryStyle();
    const textStyle = this.getTextStyle();

    return (
      <TouchableWeb
        {...touchableProps}
        className={className}
        style={style}
        disabled={disabled}
        onMouseEnter={!disabled ? this.onMouseEnter : undefined}
        onMouseLeave={!disabled ? this.onMouseLeave : undefined}
        onFocus={!disabled ? this.onFocus : undefined}
        onBlur={!disabled ? this.onBlur : undefined}
        onPressIn={!disabled ? this.onPressIn : undefined}
        onPressOut={!disabled ? this.onPressOut : undefined}
      >
        <Renderable component={accessoryLeft} className={accesoryStyle} />
        <RenderableText component={children} className={textStyle} />
        <Renderable component={accessoryRight} className={accesoryStyle} />
      </TouchableWeb>
    );
  }
}