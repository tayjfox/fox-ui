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

export interface Icons<T> {
  [key: string]: IconProvider<T>;
}

export interface IconPack<T> {
  name: string;
  icons: Icons<T>;
}

export interface IconProvider<T> {
  toReactElement(props?: T): React.ReactElement<T>;
}
