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

import { Image as ExpoImage } from 'expo-image';

import { Text } from '@/Text';
import { View } from '@/View';

import { ImageStyle } from './styles';
import { ImageProps } from './types';

const ImageRN = ExpoImage as React.ComponentType<ImageProps>;

export const Image = (props: ImageProps) => {
  const { size, caption, className, ...rest } = props;

  const getClassName = (): string => {
    return ImageStyle({
      class: className,
      size,
    });
  };

  const ImageClassName = getClassName();

  if (
    process.env.NODE_ENV !== 'production' &&
    process.env.FOXUI_SUPRESS_EXPO_IMAGE_WARNING !== 'true'
  ) {
    if (!ExpoImage) {
      console.warn(
        "Missing peer dependency: 'expo-image'. Please install it to use the Image component.\n" +
          'See https://docs.vedla.net/foxui/components/image#installation'
      );
    }
  }

  if (caption) {
    return (
      <View className="flex-1 items-center">
        <ImageRN {...rest} className={ImageClassName} size={size} contentFit="contain" />
        {typeof caption === 'string' ? (
          <Text category="s1">{caption}</Text>
        ) : (
          (caption as React.ReactNode)
        )}
      </View>
    );
  }

  return <ImageRN {...rest} className={ImageClassName} size={size} />;
};
