import React from 'react';

import { ImageStyle } from 'react-native';

import {
  Icon,
  IconElement,
} from '@fox-ui/components';

export const ClockIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='clock' />
);
