import React from 'react';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { ButtonGroupShowcase } from '@/scenes/components/button-group/button-group-showcase.component';
import {
  buttonGroupSettings,
  buttonGroupShowcase,
} from '@/scenes/components/button-group/type';
import { useRouter } from 'expo-router';
export const ButtonGroupScreen = (): React.ReactElement => {
  const router = useRouter();
  return (
    <ShowcaseContainer
      showcase={buttonGroupShowcase}
      settings={buttonGroupSettings}
      renderItem={ButtonGroupShowcase}
      onBackPress={router.back}
    />
  );
};
export default ButtonGroupScreen;
