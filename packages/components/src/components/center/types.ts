import React from 'react';

import { View, ViewProps } from 'react-native';

export interface CenterProps extends ViewProps {
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<React.ComponentRef<typeof View>>;
}

export type CenterElement = React.ReactElement<CenterProps>;
