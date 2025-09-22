import React from 'react';

import {
  ArrowIosBackIcon,
  MenuIcon,
  StarIcon,
} from '@/components/icons';
import {
  TopNavigationAction,
  TopNavigationActionElement,
  TopNavigationActionProps,
} from '@fox-ui/components';

type TopNavigationActionShowcaseProps = Omit<TopNavigationActionProps, 'icon'>;

export const BackAction = (
  props: TopNavigationActionShowcaseProps,
): TopNavigationActionElement => (
  <TopNavigationAction {...props} icon={ArrowIosBackIcon} />
);

export const RightAction = (
  props: TopNavigationActionShowcaseProps,
): TopNavigationActionElement => (
  <>
    <TopNavigationAction {...props} icon={StarIcon} />
    <TopNavigationAction {...props} icon={MenuIcon} />
  </>
);
