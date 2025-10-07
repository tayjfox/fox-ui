import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import {
  IconAnimationShowcase,
  IconSimpleUsageShowcase,
  IconThemingShowcase,
  IconWithinComponentsShowcase,
  ShowcaseCard,
} from '@/modules';
import {
  Container,
  List,
} from '@fox-ui/components-legacy';

export default function IconScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ title: 'Icons' });
  }, [navigation]);

  const DemoTypes = [
    {
      title: 'Icon Simple Usage',
      description: 'A simple usage of the Icon component.',
      component: IconSimpleUsageShowcase,
    },
    {
      title: 'Icon Within Components',
      description: 'Icons can be used within other components like Buttons, Inputs, and more.',
      component: IconWithinComponentsShowcase,
    },
    {
      title: "Icon Animation",
      description: "Icons can be animated to enhance user experience.",
      component: IconAnimationShowcase,
    },
    {
      title: "Icon Theming",
      description: "Icons can adapt to different themes and styles.",
      component: IconThemingShowcase,
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


