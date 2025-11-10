import React from 'react';

import { Image, View } from '@fox-ui/components';

export const ImageSimpleShowcase = (): React.ReactElement => (
  <View className="flex">
    <Image source={require('@/assets/pictures/demo-fox-1.jpg')} size="lg" />
  </View>
);
