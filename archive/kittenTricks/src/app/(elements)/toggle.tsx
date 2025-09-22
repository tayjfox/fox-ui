import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import {
  ToggleShowcase,
} from '@/scenes/components/toggle/toggle-showcase.component';
import {
  toggleSettings,
  toggleShowcase,
} from '@/scenes/components/toggle/type';
import {
  ToggleElement,
  ToggleProps,
} from '@fox-ui/components';

export const ToggleScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: ToggleProps): ToggleElement => (
    <ToggleShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={toggleShowcase}
      settings={toggleSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default ToggleScreen;
