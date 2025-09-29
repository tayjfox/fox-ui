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

import { RenderProp, TouchableWebProps } from '../../devsupport';
import { TextProps } from '../../ui/text/text.component';
import { ButtonStatus, Sizes } from '../shared/types';

type TouchableWebPropsWithoutChildren = Omit<TouchableWebProps, 'children'>;

export interface ButtonProps extends TouchableWebPropsWithoutChildren {
  children?: RenderProp<TextProps> | React.ReactNode;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<Partial<ImageProps>>;
  appearance?: 'filled' | 'outline' | 'ghost';
  status?: ButtonStatus;
  size?: Sizes;
  className?: string;
  textClassName?: string;
  accesoryClassName?: string;
  href?: string;
  target?: string;
  disabled?: boolean;
}

export type ButtonElement = ReactElement<ButtonProps>;
