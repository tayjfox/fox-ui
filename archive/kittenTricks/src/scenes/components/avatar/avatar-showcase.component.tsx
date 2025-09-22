import React from 'react';

import {
  Avatar,
  AvatarElement,
  AvatarProps,
} from '@fox-ui/components';

export const AvatarShowcase = (props?: AvatarProps): AvatarElement => (
  <Avatar
    {...props}
    source={require('../../../assets/images/image-app-icon.png')}
  />
);
