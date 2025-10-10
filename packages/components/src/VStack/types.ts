import React from 'react';

import { ViewProps } from 'react-native';

import { Alignment, Distribution, GapToken } from '@/shared/types';

export interface VStackProps extends ViewProps {
  className?: string;
  gap?: GapToken;
  reversed?: boolean;
  alignment?: Alignment;
  distribution?: Distribution;
}

export type VStackComponent = React.FC<VStackProps>;
export type VStackElement = React.ReactElement<VStackProps>;
