import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@meow-ui/components';

export const CreditCardIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='credit-card' />
);

export const MoreVerticalIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='more-vertical' />
);
