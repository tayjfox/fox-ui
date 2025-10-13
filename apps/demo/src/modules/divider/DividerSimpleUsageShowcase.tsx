import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  Button,
  Divider,
  HStack,
  Text,
  VStack,
} from '@kits-ui/components';
import { Avatar } from '@kits-ui/components-legacy';

export const DividerSimpleUsageShowcase = (): React.ReactElement => (
  <View>
    <VStack>
      <HStack alignment='center' gap='md'>
        <Avatar
          size='giant'
          source={require('@/assets/images/icon.png')}
        />
        <Text
          className='w-auto'
          category='h6'
        >
          UI Kitten
        </Text>
      </HStack>
      <Divider />
      <Button className='w-full'>
        INSTALL
      </Button>
    </VStack>
  </View>
);

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  title: {
    marginHorizontal: 8,
  },
  installButton: {
    marginVertical: 4,
  },
});
