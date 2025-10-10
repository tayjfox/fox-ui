import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import {
  TopNavigationAccessoriesShowcase,
  TopNavigationSimpleUsageShowcase,
} from '@/modules';
import {
  Container,
  List,
  Text,
} from '@fox-ui/components';

export default function TopNavigationScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ title: 'Top Navigation' });
  }, [navigation]);

  const DemoTypes = [
    {
      title: 'Top Navigation Simple Usage',
      description: 'In basic example TopNavigation contains a title and actions.',
      component: TopNavigationSimpleUsageShowcase,
    },
    {
      title: 'Top Navigation with Accessories',
      description: 'TopNavigation may contain various accessories.',
      component: TopNavigationAccessoriesShowcase,
    },
  ];


  return (
    <View className='py-safe h-full'>
      <List
        data={DemoTypes}
        renderItem={(info) => {

          const CardContent = info.item.component;

          return (
            <View className='mb-4 pt-3'>

              <Container className='mb-4 py-2'>

                <Text category='h6'>
                  {info.item.title}
                </Text>

                <Text

                  appearance='hint'
                  category='s2'
                >
                  {info.item.description}
                </Text>

              </Container>

              <CardContent />
            </View>

          )

        }}
      />
    </View>
  );
}
