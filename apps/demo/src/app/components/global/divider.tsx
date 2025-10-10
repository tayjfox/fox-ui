import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import {
  DividerHightShowcase,
  DividerSimpleUsageShowcase,
  ShowcaseCard,
} from '@/modules';
import {
  Container,
  List,
} from '@fox-ui/components';

export default function DividerScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ title: 'Dividers' });
  }, [navigation]);

  const DemoTypes = [
    {
      title: 'Divider Simple Usage',
      description: 'A divider is a thin line that groups content in lists and layouts.',
      component: DividerSimpleUsageShowcase,
    },
    {
      title: 'Divider With Height',
      description: 'A divider can have a custom height.',
      component: DividerHightShowcase,
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


