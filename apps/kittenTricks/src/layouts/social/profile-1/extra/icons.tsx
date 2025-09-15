import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@meow-ui/components';

export const HeartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='heart' />
);
