import React from 'react';

import {
  Image,
  View,
} from '@fox-ui/components';

export const ImageSizesShowcase = (): React.ReactElement => (
  <View className="flex">
    <Image source={require('@/assets/pictures/demo-fox-1.jpg')} className="flex h-50 w-50" />
  </View>
);
