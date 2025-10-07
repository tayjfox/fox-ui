import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import {
  LayoutLevelShowcase,
  ShowcaseCard,
} from '@/modules';
import {
  Container,
  List,
} from '@fox-ui/components';

export default function LayoutScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ title: 'Layouts' });
  }, [navigation]);

  const DemoTypes = [
    {
      title: 'Layout Level',
      description: 'Layouts can be used in different levels. It is useful, when needed to highlight the container relative to another.',
      component: LayoutLevelShowcase,
    },

  ];

  return (
    <View className='py-safe h-full'>
      <Container className='h-full'>

        <List
          data={DemoTypes}
          renderItem={(info) => {

            const CardContent = info.item.component;

            return (
              <ShowcaseCard title={info.item.title} description={info.item.description} >
                <CardContent />
              </ShowcaseCard>

            )

          }}
        />

      </Container>
    </View>
  );
}


