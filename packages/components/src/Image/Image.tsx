/**
 * @license
 * Copyright (c) 2025 Vedla Labs by Tay Fox. All Rights Reserved.
 *
 * This project is licensed under the MIT License.
 * See the LICENSE file in the project root for full license information.
 *
 * @author Tay Fox <tay@vedla.ca>
 * @description: A React Native implementation of a container component.
 * @since foxUI 1.0.0
 */

import React from 'react';

import { ImageProps } from './types';

// Dynamically import Expo Image to avoid issues if it's not installed
// Users must install 'expo-image' themselves to use this component
// See https://docs.vedla.net/foxui/components/image#installation for more info
let ImageBase = null;
let ExpoImage = null;
try {
  ExpoImage = require('expo-image').default;
} catch {
  ImageBase = require('expo-image').default;;
}

const ImageRN = (ImageBase || ExpoImage) as React.ComponentType<ImageProps>;

export const Image = (props: ImageProps) => {

  if (process.env.NODE_ENV !== 'production' && process.env.FOXUI_SUPRESS_EXPO_IMAGE_WARNING !== 'true') {
    if (!ExpoImage) {
      console.warn(
        "Missing peer dependency: 'expo-image'. Please install it to use the Image component.\n" +
        "See https://docs.vedla.net/foxui/components/image#installation"
      );
    }
    return <ImageRN {...props} />;
  };
}