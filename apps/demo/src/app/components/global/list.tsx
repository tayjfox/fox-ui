import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import {
  ListAccessoriesShowcase,
  ListCustomItemShowcase,
  ListDividersShowcase,
  ListItemSimpleUsageShowcase,
  ListSimpleUsageShowcase,
  ShowcaseCard,
} from '@/modules';
import {
  Container,
  List,
} from '@fox-ui/components';

export default function ListScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ title: 'List' });
  }, [navigation]);

  const DemoTypes = [
    {
      title: 'List Simple Usage',
      description: 'List renders a scrollable list of items.',
      component: ListSimpleUsageShowcase,
    },
    {
      title: "List Dividers",
      description: 'List can have dividers between items.',
      component: ListDividersShowcase,
    },
    {
      title: 'List Accessories',
      description: 'List items can have accessories on the left and right sides.',
      component: ListAccessoriesShowcase,
    },
    {
      title: "List Custom Item",
      description: 'List can render any custom component as its item.',
      component: ListCustomItemShowcase,

    },
    {
      title: 'List Item Simple Usage',
      description: 'ListItem is a simple component to display a single item with a title.',
      component: ListItemSimpleUsageShowcase,
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


