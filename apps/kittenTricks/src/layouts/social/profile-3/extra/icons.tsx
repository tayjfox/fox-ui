import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@meow-ui/components';

export const ArrowHeadUpIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrowhead-up' />
);

export const ArrowHeadDownIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrowhead-down' />
);
