import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import {
  ButtonGroupAppearanceShowcase,
  ButtonGroupOutlineShowcase,
  ButtonGroupSimpleUsageShowcase,
  ButtonGroupSizeShowcase,
  ButtonGroupStatusShowcase,
  ButtonGroupWithIconsShowcase,
  ShowcaseCard,
} from '@/modules';
import {
  Container,
  List,
} from '@fox-ui/components-legacy';

export default function ButtonGroup() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ title: 'Button Group' });
  }, [navigation]);

  const DemoTypes = [
    {
      title: 'Button Group Simple Usage',
      description: 'A simple example of the Button Group component usage.',
      component: ButtonGroupSimpleUsageShowcase,
    },
    {
      title: 'Button Group Appearance',
      description: 'Different appearances of the Button Group component.',
      component: ButtonGroupAppearanceShowcase,
    },
    {
      title: 'Button Group Status',
      description: 'Different statuses of the Button Group component.',
      component: ButtonGroupStatusShowcase,
    },
    {
      title: 'Button Group Size',
      description: 'Different sizes of the Button Group component.',
      component: ButtonGroupSizeShowcase,
    },
    {
      title: 'Button Group Outline',
      description: 'Button Group component with outline buttons.',
      component: ButtonGroupOutlineShowcase,
    },

    {
      title: 'Button Group With Icons',
      description: 'Button Group component with icons.',
      component: ButtonGroupWithIconsShowcase,
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
