import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { RadioGroupShowcase } from '@/scenes/components/radio-group/radio-group-showcase.component';
import { radioGroupShowcase } from '@/scenes/components/radio-group/type';
import { RadioGroupElement, RadioGroupProps } from '@meow-ui/components';

export const RadioGroupScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: RadioGroupProps): RadioGroupElement => (
    <RadioGroupShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={radioGroupShowcase}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default RadioGroupScreen;
