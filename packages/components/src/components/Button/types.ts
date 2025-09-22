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

import React, { ReactElement } from 'react';

import { ImageProps } from 'react-native';

import {
  EvaSize,
  EvaStatus,
  LiteralUnion,
  Overwrite,
  RenderProp,
  TouchableWebProps,
} from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../../ui/text/text.component';

type ButtonStyledProps = Overwrite<
  StyledComponentProps,
  {
    appearance?: LiteralUnion<'filled' | 'outline' | 'ghost'>;
  }
>;

type TouchableWebPropsWithoutChildren = Omit<TouchableWebProps, 'children'>;

interface ButtonBaseProps extends TouchableWebPropsWithoutChildren, ButtonStyledProps {
  children?: RenderProp<TextProps> | React.ReactNode;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<Partial<ImageProps>>;
  status?: EvaStatus;
  size?: EvaSize;
}

/**
 * Additional props introduced in MeowUI. v0.1.0
 * @since MeowUI 0.1.0
 */
export interface ButtonProps extends ButtonBaseProps {
  className?: string;
  href?: string;
  target?: string;
}

export type ButtonElement = ReactElement<ButtonProps>;
