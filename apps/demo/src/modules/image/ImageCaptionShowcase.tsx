import React from 'react';

import {
  Image,
  View,
} from '@fox-ui/components';

export const ImageCaptionShowcase = (): React.ReactElement => (
  <View className="flex">
    <Image source={require('@/assets/pictures/demo-fox-1.jpg')} caption="This is a fox." />
  </View>
);
