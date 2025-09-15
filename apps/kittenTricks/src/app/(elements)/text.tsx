import React from 'react';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { TextShowcase } from '@/scenes/components/text/text-showcase.component';
import { textSettings, textShowcase } from '@/scenes/components/text/type';

import { useRouter } from 'expo-router';
export const TextScreen = (): React.ReactElement => {
  const router = useRouter();
  return (
    <ShowcaseContainer
      showcase={textShowcase}
      settings={textSettings}
      renderItem={TextShowcase}
      onBackPress={router.back}
    />
  );
};

export default TextScreen;
