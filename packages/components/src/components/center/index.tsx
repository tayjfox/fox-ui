import React from 'react';

import { View, ViewProps } from 'react-native';

import type { VariantProps } from '@gluestack-ui/nativewind-utils';

import { centerStyle } from './styles';

type ICenterProps = ViewProps & VariantProps<typeof centerStyle>;

const Center = React.forwardRef<React.ComponentRef<typeof View>, ICenterProps>(
  ({ className, ...props }, ref) => {
    return <View className={centerStyle({ class: className })} {...props} ref={ref} />;
  }
);

Center.displayName = 'Center';

export { Center };
