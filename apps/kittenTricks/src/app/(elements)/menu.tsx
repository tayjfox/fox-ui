import React from 'react';

import { useRouter } from 'expo-router';

import { ShowcaseContainer } from '@/components/showcase-container.component';
import { MenuShowcase } from '@/scenes/components/menu/menu-showcase.component';
import {
  menuSettings,
  menuShowcase,
  MenuShowcaseProps,
} from '@/scenes/components/menu/type';
import { MenuElement } from '@meow-ui/components';

export const MenuScreen = (): React.ReactElement => {
  const router = useRouter();
  const renderItem = (props: MenuShowcaseProps): MenuElement => (
    <MenuShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={menuShowcase}
      settings={menuSettings}
      renderItem={renderItem}
      onBackPress={router.back}
    />
  );
};

export default MenuScreen;
