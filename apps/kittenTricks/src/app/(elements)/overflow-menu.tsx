import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { OverflowMenuShowcase } from '@/scenes/components/overflow-menu/overflow-menu-showcase.component';
import {
  OverflowMenuPropsCustom,
  overflowMenuSettings,
  overflowMenuShowcase,
} from '@/scenes/components/overflow-menu/type';
import { OverflowMenuElement } from '@meow-ui/components';

export const OverflowMenuScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: OverflowMenuPropsCustom): OverflowMenuElement => (
    <OverflowMenuShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={overflowMenuShowcase}
      settings={overflowMenuSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default OverflowMenuScreen;
