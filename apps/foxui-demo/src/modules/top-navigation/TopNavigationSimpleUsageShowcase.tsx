import React from 'react';

import {
  Icon,
  IconElement,
  IconProps,
  TopNavigation,
  TopNavigationAction,
} from '@fox-ui/components';

const BackIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='arrow-back'
  />
);

const BackAction = (): React.ReactElement => (
  <TopNavigationAction icon={BackIcon} />
);

export const TopNavigationSimpleUsageShowcase = (): React.ReactElement => (
  <TopNavigation
    accessoryLeft={BackAction}
    title='Eva Application'
  />
);
