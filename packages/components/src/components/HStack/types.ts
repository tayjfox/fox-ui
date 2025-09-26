import React from 'react';

import { ViewProps } from 'react-native';

import { Alignment, Distribution, GapToken } from '../shared/types';

export interface HStackProps extends ViewProps {
  className?: string;
  gap?: GapToken;
  reversed?: boolean;
  alignment?: Alignment;
  distribution?: Distribution;
}

export type HStackComponent = React.FC<HStackProps>;
export type HStackElement = React.ReactElement<HStackProps>;
