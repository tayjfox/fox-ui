import React from 'react';

import { type ViewProps } from '../View/types';

export interface LayoutProps extends ViewProps {
  children?: React.ReactNode;
  className?: string;
  level?: '1' | '2' | '3' | '4';
}

export type LayoutElement = React.ReactElement<LayoutProps>;
