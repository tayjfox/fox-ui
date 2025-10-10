import React from 'react';

import { ViewProps as ViewPropsRN } from 'react-native';

export interface ViewProps extends ViewPropsRN {
  className?: string;
}

export type ViewElement = React.ReactElement<ViewProps>;
