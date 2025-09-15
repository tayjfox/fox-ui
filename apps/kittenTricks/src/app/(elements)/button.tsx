import React from 'react';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { ButtonShowcase } from '@/scenes/components/button/button-showcase.component';
import {
  buttonSettings,
  buttonShowcase,
} from '@/scenes/components/button/type';

import { useRouter } from 'expo-router';
export const ButtonScreen = (): React.ReactElement => {
  const router = useRouter();
  return (
    <ShowcaseContainer
      showcase={buttonShowcase}
      settings={buttonSettings}
      renderItem={ButtonShowcase}
      onBackPress={router.back}></ShowcaseContainer>
  );
};
export default ButtonScreen;
