import React from 'react';

import { ImageStyle } from 'react-native';

import {
  Icon,
  IconElement,
} from '@fox-ui/components';

export const ArrowIosBackIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrow-ios-back' />
);
