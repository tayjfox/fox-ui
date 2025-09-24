import React from 'react';

import { View } from 'react-native';

import { vstackStyle } from './styles';

type IVStackProps = React.ComponentProps<typeof View>;

const VStack = React.forwardRef<React.ComponentRef<typeof View>, IVStackProps>(
  ({ className, ...props }, ref) => {
    return <View className={vstackStyle({ class: className })} {...props} ref={ref} />;
  }
);

VStack.displayName = 'VStack';

export { VStack };
