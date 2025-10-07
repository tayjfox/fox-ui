import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import {
  CardAccessoriesShowcase,
  CardSimpleUsageShowcase,
  CardStatusesShowcase,
  ShowcaseCard,
} from '@/modules';
import {
  Container,
  List,
} from '@fox-ui/components-legacy';

export default function CardScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ title: 'Cards' });
  }, [navigation]);

  const DemoTypes = [
    {
      title: 'Card Simple Usage',
      description: 'In basic example, card accepts content view as child element.',
      component: CardSimpleUsageShowcase,
    },
    {
      title: "Card Accessories",
      description: 'Cards can have header and footer accessories.',
      component: CardAccessoriesShowcase,
    },
    {
      title: 'Card Statuses',
      description: 'Cards can have different statuses.',
      component: CardStatusesShowcase,
    }
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


