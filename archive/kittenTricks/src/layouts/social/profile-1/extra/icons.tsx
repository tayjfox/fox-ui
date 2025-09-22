import React from 'react';

import { ImageStyle } from 'react-native';

import {
  Icon,
  IconElement,
} from '@fox-ui/components';

export const HeartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='heart' />
);
