import React from 'react';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { SpinnerShowcase } from '@/scenes/components/spinner/spinner-showcase.component';
import {
  spinnerSettings,
  spinnerShowcase,
} from '@/scenes/components/spinner/type';
import { useRouter } from 'expo-router';
export const SpinnerScreen = (): React.ReactElement => {
  const router = useRouter();
  return (
    <ShowcaseContainer
      showcase={spinnerShowcase}
      settings={spinnerSettings}
      renderItem={SpinnerShowcase}
      onBackPress={router.back}
    />
  );
};

export default SpinnerScreen;
