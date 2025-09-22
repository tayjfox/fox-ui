import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  RadioShowcase,
} from '@/scenes/components/radio/radio-showcase.component';
import {
  radioSettings,
  radioShowcase,
} from '@/scenes/components/radio/type';
import {
  RadioElement,
  RadioProps,
} from '@fox-ui/components';

export const RadioScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: RadioProps): RadioElement => (
    <RadioShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={radioShowcase}
      settings={radioSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default RadioScreen;
