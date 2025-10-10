import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import {
  ShowcaseCard,
  TextAppearancesShowcase,
  TextCategoriesShowcase,
  TextStatusesShowcase,
} from '@/modules';
import {
  Container,
  List,
} from '@fox-ui/components';

export default function TextScreen() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ title: 'Text' });
  }, [navigation]);


  const DemoTypes = [
    {
      title: 'Text Categories',
      description:
        'Text has pre-defined set of styles for headings, subtitles, paragraphs, and more.',
      component: TextCategoriesShowcase,
    },
    {
      title: 'Text Appearances',
      description: 'Text can have different appearances. Primary is the default one.',
      component: TextAppearancesShowcase,
    },
    {
      title: 'Text Statuses',
      description: 'Text can have different statuses.',
      component: TextStatusesShowcase,
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


