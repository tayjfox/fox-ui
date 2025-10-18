import React, { useEffect } from 'react';

import { useNavigation } from 'expo-router';

import {
  ImageCaptionShowcase,
  ImageSimpleShowcase,
  ImageSizesShowcase,
  ShowcaseCard,
} from '@/modules';
import {
  Container,
  List,
  Text,
  View,
} from '@fox-ui/components';

export default function TextScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ title: 'Image' });
  }, [navigation]);

  const DemoTypes = [
    {
      title: 'Simple Image',
      description:
        'Text has pre-defined set of styles for headings, subtitles, paragraphs, and more.',
      component: ImageSimpleShowcase,
    },
    {
      title: 'Image Sizes',
      description: 'Text can have different appearances.',
      component: ImageSizesShowcase,
    },
    {
      title: 'Image with caption',
      description: 'Images can include a caption to provide context or description.',
      component: ImageCaptionShowcase,
    },
    {
      title: 'View the picture catalog',
      description: 'Find the authors of the pictures used in this section of the app.',
      component: () => (
        <View>
          <Text>Stay tuned!</Text>
        </View>
      ),
    },
  ];

  return (
    <View className="py-safe h-full">
      <Container className="h-full">
        <List
          data={DemoTypes}
          renderItem={(info) => {
            const CardContent = info.item.component;

            return (
              <ShowcaseCard title={info.item.title} description={info.item.description}>
                <CardContent />
              </ShowcaseCard>
            );
          }}
        />
      </Container>
    </View>
  );
}
