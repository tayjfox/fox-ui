import React from 'react';

import { Image } from 'react-native';

import {
  Container,
  View,
} from '@fox-ui/components';

export const ImageSimpleShowcase = (): React.ReactElement => (
  <Container className="flex">
    <View className="flex">
      <Image source={require('@/assets/pictures/demo-fox-1.jpg')} className="flex h-50 w-50" />
    </View>
  </Container>
);
