import React from 'react';

import { ItemSize } from '@/shared/types';
import { ViewProps } from '@/View/types';

export interface DividerProps extends ViewProps {
  className?: string;
  height?: ItemSize;
}
export type DividerElement = React.ReactElement<DividerProps>;
