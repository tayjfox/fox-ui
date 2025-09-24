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
 * @since MeowUI 0.1.0
 */

import React from 'react';

import {
  FalsyFC,
  FalsyText,
  TouchableWeb,
  TouchableWebElement,
} from '../../devsupport';
import {
  AccesoriesVariants,
  ButtonStyle,
  TextVariants,
} from './styles';
import { ButtonProps } from './types';

export { type ButtonProps };

export type ButtonElement = React.ReactElement<ButtonProps>;

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 *
 * @extends React.Component
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} children - String, number or a function component
 * to render within the button.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `filled`, `outline` or `ghost`.
 * Defaults to *filled*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *primary*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `tiny`, `small`, `medium`, `large`, or `giant`.
 * Defaults to *medium*.
 *
 * @property {string} className - Additional class name for button container.
 * Can be used to pass nativewind custom styles.
 * Example: `className="my-2 px-4 bg-red-500"`
 *
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example ButtonSimpleUsage
 * Default button size is `medium` and status color is `primary`.
 *
 * @overview-example ButtonStates
 * Button can be disabled with `disabled` property.
 *
 * @overview-example ButtonAppearances
 * Within Eva Design System, it can be `filled`, `outline` or `ghost`.
 *
 * @overview-example ButtonAccessories
 * Also, it may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 * Within Eva it is expected to be an image or [svg icon](guides/icon-packages).
 *
 * @overview-example ButtonSize
 * Buttons can be resized by using `size` property.
 *
 * @overview-example ButtonStatus
 * Or marked with `status` property.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example ButtonOutline
 * Status can be combined with `outline` appearance.
 *
 * @overview-example ButtonGhost
 * As well as for `ghost`.
 *
 * @overview-example ButtonStyling
 * Button and it's inner views can be styled by passing them as function components.
 * ```
 * import { Button, Text } from '@fox-ui/components';
 *
 * <Button style={...}>
 *   {evaProps => <Text {...evaProps}>BUTTON</Text>}
 * </Button>
 * ```
 *
 * @overview-example ButtonTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */

export class Button extends React.Component<ButtonProps, { interactionState: 'hover' | 'disabled' | 'active' | 'focused' | undefined }> {


  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      interactionState: undefined,
    };
  }

  private handleMouseEnter = (): void => {
    this.setState({ interactionState: 'hover' });
  };

  private handleMouseLeave = (): void => {
    this.setState({ interactionState: undefined });
  };

  private handleFocus = (): void => {
    this.setState({ interactionState: 'focused' });
  };

  private handleBlur = (): void => {
    this.setState({ interactionState: undefined });
  };

  private handlePressIn = (): void => {
    this.setState({ interactionState: 'active' });
  };

  private handlePressOut = (): void => {
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
        onMouseEnter={!disabled ? this.handleMouseEnter : undefined}
        onMouseLeave={!disabled ? this.handleMouseLeave : undefined}
        onFocus={!disabled ? this.handleFocus : undefined}
        onBlur={!disabled ? this.handleBlur : undefined}
        onPressIn={!disabled ? this.handlePressIn : undefined}
        onPressOut={!disabled ? this.handlePressOut : undefined}
      >
        <FalsyFC component={accessoryLeft} className={accesoryStyle} />
        <FalsyText component={children} className={textStyle} />
        <FalsyFC component={accessoryRight} className={accesoryStyle} />
      </TouchableWeb>
    );
  }
}