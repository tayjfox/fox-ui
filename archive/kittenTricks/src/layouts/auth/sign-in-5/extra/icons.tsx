import React from 'react';

import { ImageStyle } from 'react-native';

import {
  Icon,
  IconElement,
} from '@fox-ui/components';

export const EmailIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='email' />
);

export const PhoneIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='phone' />
);
