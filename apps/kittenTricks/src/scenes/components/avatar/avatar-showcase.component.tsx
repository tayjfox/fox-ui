import React from 'react';
import { Avatar, AvatarElement, AvatarProps } from '@meow-ui/components';

export const AvatarShowcase = (props?: AvatarProps): AvatarElement => (
  <Avatar
    {...props}
    source={require('../../../assets/images/image-app-icon.png')}
  />
);
