import React from 'react';

import { View, ViewProps } from 'react-native';

export interface ContainerProps extends ViewProps {
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<React.ComponentRef<typeof View>>;
}

export type ContainerElement = React.ReactElement<ContainerProps>;
