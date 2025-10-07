import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import {
  ButtonAccessoriesShowcase,
  ButtonAppearancesShowcase,
  ButtonGhostShowcase,
  ButtonOutlineShowcase,
  ButtonSimpleUsageShowcase,
  ButtonSizeShowcase,
  ButtonStatesShowcase,
  ButtonStatusShowcase,
  ButtonThemingShowcase,
  ShowcaseCard,
} from '@/modules';
import {
  Container,
  List,
} from '@fox-ui/components-legacy';

export default function ButtonScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ title: 'Button Group' });
  }, [navigation]);

  const DemoTypes = [
    {
      title: 'Button Simple Usage',
      description: 'Default button size is medium and status color is primary.',
      component: ButtonSimpleUsageShowcase,
    },
    {
      title: 'Button States',
      description: 'Button can be disabled with disabled property.',
      component: ButtonStatesShowcase,
    },
    {
      title: 'Button Appearances',
      description: 'Button can have different appearances: filled (default), outline, ghost.',
      component: ButtonAppearancesShowcase,
    },
    {
      title: 'Button Accessories',
      description: 'Button can have icon or custom component on the left or right side.',
      component: ButtonAccessoriesShowcase,
    },
    {
      title: 'Button Sizes',
      description: 'Button can have different sizes: small, medium (default), large.',
      component: ButtonSizeShowcase,
    },
    {
      title: 'Button Statuses',
      description:
        'Button can have different status colors: primary (default), success, info, warning, danger.',
      component: ButtonStatusShowcase,
    },
    {
      title: 'Button Outline',
      description: 'Outline buttons are medium size by default.',
      component: ButtonOutlineShowcase,
    },
    {
      title: 'Button Ghost',
      description: 'Ghost buttons are medium size by default.',
      component: ButtonGhostShowcase,
    },
    {
      title: 'Button Theming',
      description: 'Button can be themed with custom icons and loading indicator.',
      component: ButtonThemingShowcase,
    },
  ];


  return (
    <View className='p-safe h-full'>
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


